import { FileSystemAdapter, Notice, Plugin, TFile } from 'obsidian';
import * as path from 'path';

export default class CopyFilePathPlugin extends Plugin {

	async onload() {
		this.addCommand({
			id: 'copy-absolute-path',
			name: 'Copy absolute file path',
			checkCallback: (checking: boolean) => {
				const file = this.app.workspace.getActiveFile();
				if (!file) {
					return false;
				}
				if (!checking) {
					this.copyAbsolutePath(file);
				}
				return true;
			},
		});
	}

	private async copyAbsolutePath(file: TFile) {
		const adapter = this.app.vault.adapter;
		if (!(adapter instanceof FileSystemAdapter)) {
			new Notice('Copy File Path is only supported on Desktop.');
			return;
		}

		const vaultPath = adapter.getBasePath();
		const absolutePath = path.join(vaultPath, file.path);

		try {
			await navigator.clipboard.writeText(absolutePath);
			new Notice('Path copied to clipboard');
		} catch (error) {
			console.error('[CopyFilePath] Failed to copy path:', error);
			new Notice('Failed to copy path to clipboard');
		}
	}
}
