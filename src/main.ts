import { Notice, Plugin, TFile } from 'obsidian';
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
		const vaultPath = (this.app.vault.adapter as any).basePath;
		const absolutePath = path.join(vaultPath, file.path);

		await navigator.clipboard.writeText(absolutePath);
		new Notice('Path copied to clipboard');
	}
}
