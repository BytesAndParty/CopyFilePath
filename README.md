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

## Part of the BytesAndParty Plugin Suite

This plugin works great alongside other plugins from the same author:

- [Auto Categories](https://github.com/BytesAndParty/Obsidian_AutoCategories) - Automatically create category pages from frontmatter
- [Better Gitignore](https://github.com/BytesAndParty/BetterGitignore) - Beautiful .gitignore editor with templates
- [Command Overview](https://github.com/BytesAndParty/CommandOverview) - Quick command palette with shortcuts
- [Company Knowledge Hub](https://github.com/BytesAndParty/CompanyKnowledgeHub) - Publish notes to a shared knowledge base
- [Customer Tag Sorter](https://github.com/BytesAndParty/CustomerTag) - Organize notes by customer tags

## License

MIT
