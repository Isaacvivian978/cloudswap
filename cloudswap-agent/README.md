# CloudSwap 🚀

**CloudSwap** is an autonomous migration pipeline and advanced AI agent designed to transition legacy Firebase projects to enterprise-grade Google Cloud Run and Cloud SQL infrastructures smoothly and securely.

## What is CloudSwap?
CloudSwap acts as an intelligent pair programmer taking the heavy lifting out of complex backend migrations. Instead of manually porting NoSQL databases to SQL and rewriting serverless functions, CloudSwap automates the entire process while strictly adhering to modern architectural rules and zero-downtime deployment standards.

## Key Features

- **Intelligent Transpilation**: Automatically translates Firebase/Firestore data models and NoSQL queries to robust relational Cloud SQL schemas and optimized SQL queries.
- **QA Shadow Validation**: Features a built-in QA validation agent that tests your migrated endpoints against the original Firebase implementations to guarantee perfect API parity before finalizing the migration.
- **Automated Infrastructure as Code**: Auto-generates highly optimized `Dockerfile`s and `terraform.tf` configurations, readying your application for an immediate Google Cloud Run deployment.
- **Native Antigravity IDE Integration**: Operates seamlessly inside your environment. Once installed, simply trigger the `/cloudswap` command, and the agent begins analyzing and migrating your codebase autonomously.

## How It Works

1. **Trigger the Migration**: Initiate the **CloudSwap Master Migration** workflow.
2. **Deep Analysis**: CloudSwap scopes out your existing Firebase implementations, authentications, and database structures.
3. **Execution**: The application logic and schemas are systematically ported to Cloud SQL APIs.
4. **Validation**: The QA Shadow agent verifies complete behavioral parity.
5. **Finalization**: Deployment configs are generated, ensuring your codebase is ready for `npm run deploy`.

## Getting Started
To get the CloudSwap agent configured in your local IDE environment, run:

```bash
npx cloudswap-init
```

The initializer automatically detects your OS, downloads the securely compiled migration engine binary, and configures the necessary `.agent/rules/` and `.agent/workflows/` so you can start migrating immediately.
