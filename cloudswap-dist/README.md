# CloudSwap Agent Distribution 🚀

Welcome to the distribution repository for the **CloudSwap Agent**. This repository serves as the central hub for hosting compiled binaries and installation scripts for the CloudSwap automated migration tool.

🌐 **Website:** [https://cloudswap-beta.vercel.app/](https://cloudswap-beta.vercel.app/)

## What is this?
To protect proprietary source code and ensure consistent behavior across different operating systems, the core CloudSwap Engine is compiled into standalone native executables (using Vercel's `pkg`). This repository hosts those pre-built binaries in its **GitHub Releases**.

## How it works
1. You run our initializer in your workspace: `npx cloudswap-init`
2. The installation bridge automatically detects your Operating System (Windows, macOS, or Linux).
3. The correct binary is securely downloaded from this repository's *Releases* page straight into your local workspace (`node_modules/.bin/`).
4. The Antigravity IDE is instantly configured with a new `/cloudswap` workflow slash command to trigger the downloaded binary.

## For Maintainers
If you are updating the engine, make sure to compile the binaries using the primary source code repository and upload them to a new Release tag (**v1.X.X**) here.

*Note: The actual source code for the CloudSwap Agent is kept in a separate, private repository.*
