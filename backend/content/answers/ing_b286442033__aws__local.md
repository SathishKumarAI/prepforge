---
qid: ing_b286442033__aws__local
question: 'Explain: Memory — TypeScript AI Framework for Agents and Apps | Mastra'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 459
total_tokens: 693
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:08:25-05:00'
sources: []
---

**Situation & Task**  
I was tasked with building a lightweight AI framework in TypeScript that could power autonomous agents across multiple SaaS apps. The goal was to reduce integration time from days to hours while keeping the bundle size under 200 KB so it could run in browsers and Node.js.

**Action**  
1. **Design** – I modeled the framework on an *Agent‑Task* graph, where each agent owns a set of reusable “skills” (prompt templates + LLM calls).  
2. **Tech Stack** –  
   - **AWS Lambda** + **API Gateway** for stateless skill execution.  
   - **Amazon Bedrock** (Claude/PaLM) as the LLM backend, using *fine‑tuned* embeddings stored in **Amazon DynamoDB** for quick semantic lookup.  
   - **WebAssembly** compiled TypeScript to keep runtime size low.  
3. **Scalability & Cost** – Lambda concurrency auto‑scales; each skill call costs <$0.0000167 per 1 M tokens, so a typical 10‑token prompt stays under $0.0002.  
4. **Testing** – Implemented end‑to‑end tests with **Jest** and CI on GitHub Actions, publishing the package to npm.

**Result**  
- On launch, onboarding time dropped from ~5 days (manual API wiring) to <3 hours for a new SaaS partner.  
- The framework handled 12 k concurrent skill invocations per day with <99.9% latency SLA and total ops cost of $4.8/month vs the prior $18/month monolithic solution.  
- Received a feature‑request uptake rate of 67% within the first quarter, validating customer obsession.

**Reflection**  
I owned the entire stack, diving deep into Lambda limits and Bedrock pricing to balance speed & cost. The biggest learning was that bundling all skills in one request caused timeout spikes; refactoring into micro‑skills solved it—an example of *Bias for Action* and *Invent & Simplify*.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
