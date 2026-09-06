---
qid: ing_bc90c26352__think__local
question: 'Explain: Build with Vercel and trace with Logfire'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 190
output_tokens: 506
total_tokens: 696
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T13:25:30-05:00'
sources: []
---

**1️⃣ Clarify the ask & set assumptions**  
   *What “Build with Vercel” means?* – assume a typical Next.js or static‑site project being deployed on Vercel’s serverless platform.  
   *What “trace with Logfire” entails?* – presume we want distributed tracing (request spans, logs) using the Logfire library in Node/TS.  
   Assume the user knows basic Vercel deployment and wants a concise guide.

**2️⃣ Mental model / framework**  
   - **Deployment flow**: local dev → push to Git → Vercel CI/CD → edge functions.  
   - **Tracing flow**: instrument code → propagate context → export spans to Logfire backend.  
   Combine these by inserting tracing hooks into the build pipeline.

**3️⃣ Step‑by‑step reasoning**  
   1. Add Logfire SDK to project (`npm i @logfire/sdk`).  
   2. Create a `logfire.config.js` with service name and optional environment tags.  
   3. Initialize Logfire in an entry point (e.g., `app.tsx`, `pages/_app.tsx`) before any API routes run.  
   4. Wrap API route handlers or middleware with `withTracing()` so each request starts a root span.  
   5. In Vercel, set the required environment variables (`LOGFIRE_TOKEN`, etc.) via the dashboard or CI secrets.  
   6. Deploy; verify that logs appear in Logfire’s UI and spans are linked to incoming HTTP requests.

**4️⃣ Common traps to avoid**  
   - Forgetting to export the SDK configuration; Logfire won’t send data.  
   - Using synchronous `console.log` after tracing, which can break context propagation.  
   - Not setting the correct Vercel environment variables, leading to “no token” errors.  
   - Ignoring cold‑start delays: initialize Logfire outside request handlers.

**5️⃣ Sanity‑check & communicate**  
   *Check* that a sample request produces a span in Logfire’s UI and that log entries carry the same trace ID.  
   *Explain* to the user that this setup gives them real‑time visibility into serverless function execution, error rates, and latency—all without modifying Vercel’s config beyond env vars.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
