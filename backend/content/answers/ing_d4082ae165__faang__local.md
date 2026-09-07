---
qid: ing_d4082ae165__faang__local
question: 'Explain: Claude Plugins Explained (2026): Claude Code Plugins, Cowork Plugins,
  and Where the Marketplace Is'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 595
total_tokens: 839
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:53:24-05:00'
sources: []
---

**Clarify**  
You want a concise overview of *Claude*’s plugin ecosystem in 2026: what **Code** and **Co‑Work** plugins are, how they differ, and where developers can find or publish them (the Marketplace). I’ll assume the audience knows Claude is an LLM from Anthropic but not the plugin specifics.

---

### Approach  
1. Define each plugin type with purpose & typical use cases.  
2. Explain the technical stack: how plugins are invoked, authentication, runtime isolation.  
3. Describe the Marketplace workflow (search, vetting, versioning).  
4. Highlight key differences and best‑practice deployment tips.

---

### Depth  

| Plugin | Core Function | Invocation Flow | Runtime |
|--------|---------------|-----------------|---------|
| **Code** | Executes user‑supplied code in safe sandboxes (Python, JS, SQL) to fetch or transform data. | User writes prompt → Claude resolves `{{run_code}}` token → API calls sandbox → result returned inline. | Docker/K8s pods with read‑only FS; 5 s CPU cap; network disabled unless whitelisted. |
| **Co‑Work** | Extends Claude’s dialogue by integrating third‑party services (calendar, email, CRM). | Prompt includes intent (e.g., “schedule meeting”). Claude calls plugin endpoint → returns structured payload → user confirms. | Stateless HTTP(S) endpoints; OAuth2 scopes per service. |

*Marketplace*:  
- **Search**: Tag‑based filters (`python`, `gmail`) and usage metrics.  
- **Submission**: GitHub repo + manifest (name, description, version, auth).  
- **Vetting**: Automated sandbox tests + manual security review.  
- **Versioning**: Semantic tags; deprecation policy after 12 months.

---

### Edge Cases  

| Scenario | Risk | Mitigation |
|----------|------|------------|
| Malicious code in Code plugin | Runtime escalation | Strict container limits & network isolation |
| API rate‑limit abuse via Co‑Work | Service disruption | Per‑user quota and exponential backoff |
| Outdated dependencies in marketplace | CVEs | Continuous security scan pipeline |

---

### Optimize & Communicate  

- **Batching**: Combine multiple `{{run_code}}` calls into a single request to reduce latency.  
- **Caching**: Store deterministic plugin outputs keyed by input hash.  
- **Explainability**: Log plugin decisions so users can audit actions.

When presenting, I’d walk through a sample prompt, show the JSON payload exchanged with a Code plugin, and finish with a quick demo of adding a new Co‑Work plugin to the Marketplace—highlighting that the whole flow is designed for rapid iteration while keeping safety at the core.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
