# Continuum

> A local-first desktop workspace restoration system designed to eliminate workflow setup friction.

---

## Overview

Continuum helps you capture and restore productivity workflows with minimal friction.

Instead of reopening applications, folders, browser tabs, terminals, and tools manually every time, Continuum allows you to save workspaces and selectively restore only what you need.

Built for focused workflows, fast context switching, and clean desktop productivity.

---

## Features

- Workspace capture
- Selective restore
- Browser tab restoration
- Quick Peek previews
- Interruption recovery
- Workspace integrity checks
- Local-first architecture
- Lightweight and privacy-focused
- Fast restore workflows

---

## Requirements

- Windows 10 / 11
- Google Chrome
- Chrome Extension (included)

---

# Installation

## 1. Install Continuum

## Download

Download the latest Windows installer from the Releases section.
Run the installer and complete setup.

---

## 2. Install the Chrome Extension

Open Chrome:

```text
chrome://extensions/
```

Enable:

```text
Developer Mode
```

Click:

```text
Load unpacked
```

Select the included:

```text
extension/
```

folder.

---

# Usage

## Capture Workspace

Click:

```text
Capture Current
```

Continuum captures:

- active applications
- browser tabs
- folders
- workspace metadata
- session state

---

## Restore Workspace

Click:

```text
Restore
```

Choose which items you want to reopen.

Continuum restores only the selected components.

---

## Notes

- Continuum is currently Windows-only.
- Browser tab restoration requires the included Chrome extension.
- Some background/system applications are automatically filtered.
- Continuum uses a local WebSocket connection for browser synchronization.

---

# Screenshots

Add screenshots here.

```md
![Dashboard](screenshots/dashboard.png)
![Restore Modal](screenshots/restore-modal.png)
```

---

# Repository Structure

```text
continuum/
│
├── README.md
├── releases/
│   └── ContinuumSetup.exe
│
└── extension/
    ├── manifest.json
    ├── background.js
    └── icons/
```

---

# Design Philosophy

Continuum is designed to feel:

- minimal
- calm
- fast
- focused
- desktop-native

The experience prioritizes:

- clarity
- usability
- continuity
- low friction
- local-first workflows

---

# Privacy

Continuum is local-first.

Your workspace data stays on your machine unless you explicitly exp
