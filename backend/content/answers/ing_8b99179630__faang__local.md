---
qid: ing_8b99179630__faang__local
question: 'Q63: How do you handle version control for prompts in production?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 479
total_tokens: 715
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:08:58-05:00'
sources: []
---

**Clarify**  
We’re asked how to manage prompt versions that run in a live ML system (e.g., GPT‑based recommendation or chatbot). I’d confirm:  
1) Are prompts static strings or programmatic templates?  
2) Do we need auditability for regulatory compliance?  
3) Is A/B testing required, and do we support rollback?  

**Approach**  
Treat prompts like code artifacts: store them in a versioned repo, tag releases, and serve via a configuration service. Each production deployment pulls the prompt by its hash or semantic ID, allowing deterministic replay.

**Depth**  
1. **Repository & CI** – Store raw prompt files (JSON/SQL) in Git with clear commit messages. Use pre‑commit hooks to validate syntax (e.g., JSON schema).  
2. **Semantic Versioning** – `major.minor.patch` where major changes alter model behavior, minor tweaks adjust wording, patch fixes typos.  
3. **Feature Flags / A/B** – Deploy new prompt IDs behind a flag; traffic split allows live comparison and rollback.  
4. **Serving Layer** – A lightweight microservice (e.g., FastAPI) exposes `GET /prompt/{id}` returning the current text. Cache in Redis for low latency.  
5. **Audit & Rollback** – Log every prompt request with its ID, timestamp, user context; store logs in a searchable index. If a regression occurs, revert to previous ID instantly.

Complexity: O(1) retrieval time; storage overhead negligible. Trade‑off is added infra but yields reproducibility and compliance.

**Edge Cases**  
- Prompt drift due to model updates → re‑validate after each major model release.  
- Concurrency: two services reading different versions → use consistent hashing or version pinning in containers.  
- Security: sanitize prompts to prevent injection attacks.

**Optimize & Communicate**  
We can further optimize by using a CDN for static prompt assets, reducing latency globally. I’d explain this flow to interviewers as: “Treat prompts like code—version them, test them, serve them via flags, and audit every hit.” This demonstrates clear problem framing, systematic solution design, and awareness of operational concerns.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
