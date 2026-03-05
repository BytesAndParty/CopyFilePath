# Copy File Path

An Obsidian plugin that copies the absolute system file path of the current note to your clipboard with a single click.

## Features

- **Copy Absolute Path**: Copies the full system path (e.g., `/Users/you/vault/Notes/my-note.md`) to the clipboard
- **Command Palette**: Use `Cmd/Ctrl + P` and search for "Copy absolute file path"
- **Page Header Icon**: Works with the [Commander](https://github.com/phibr0/obsidian-commander) plugin to add a clickable icon in the page header

## Installation

### Manual Installation

1. Download `main.js` and `manifest.json` from the latest release
2. Create a folder in your vault: `.obsidian/plugins/copy-file-path/`
3. Copy `main.js` and `manifest.json` into this folder
4. Restart Obsidian
5. Enable the plugin in Settings → Community Plugins

## Usage

### Command

- **Copy absolute file path**: Copies the full system path of the active note to the clipboard

### Recommended: Add a Page Header Icon

Use the [Commander](https://github.com/phibr0/obsidian-commander) plugin to add an icon to the page header:

1. Open Commander settings → Page Header
2. Add command → "Copy File Path: Copy absolute file path"
3. Choose an icon (e.g., `lucide-clipboard-copy`)

## Development

```bash
# Install dependencies
bun install

# Build for development (with watch)
bun run dev

# Build for production
bun run build
```

## Works Well with Other BytesAndParty Plugins

- [Command Overview](https://github.com/BytesAndParty/CommandOverview) - Keep "Copy absolute file path" in a central shortcut overlay.
- [Customer Tag Sorter](https://github.com/BytesAndParty/CustomerTag) - Quickly verify new file locations after automatic customer-based moves.
- [Company Knowledge Hub](https://github.com/BytesAndParty/CompanyKnowledgeHub) - Share exact source file paths during publish/review collaboration.
- [Auto Categories](https://github.com/BytesAndParty/Obsidian_AutoCategories) - Copy paths from generated category pages for automation or scripting.

## License

MIT
