---
qid: ing_8d8da005b4__fp__local
question: 'Explain: Design the backend for a customer-facing chatbot. Walk me through
  the request path.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 177
output_tokens: 469
total_tokens: 646
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:05:54-05:00'
sources: []
---

### From “I need an answer” to “I got it”

1. **Client → API Gateway**  
   *Why?* The gateway is the **single entry point** that enforces security (OAuth/OIDC), rate‑limits, and logs for observability. It also normalises payloads into a canonical JSON schema.

2. **Gateway → Intent‑Detection Service**  
   *What it solves?* Turns free‑text into a structured intent + entities graph. The service is a lightweight inference model that scores candidate intents via a cross‑entropy loss minimiser; the highest‑scoring path becomes the “decision vector.”  

3. **Intent Vector → Dialogue Manager**  
   *Why must it be stateless?* Because scaling horizontally demands idempotence; state is stored in a fast key‑value store (e.g., Redis) keyed by session ID, allowing the manager to retrieve context and compute the next system action.

4. **Dialogue Action → Knowledge‑Base Query / External API**  
   *Deep principle:* The knowledge base acts as a **probabilistic memory**; queries are resolved via BM25 + transformer embeddings that rank documents by relevance probability \(P(doc|query)\). If external APIs are needed, the manager schedules them asynchronously and stitches results.

5. **Response Builder → NLG Service**  
   *Why separate?* Generates fluent text conditioned on the dialogue state and retrieved facts. The model is fine‑tuned with a constrained beam search that respects user‑defined style guidelines (e.g., persona tokens).

6. **NLG → API Gateway → Client**  
   *Insight often missed:* The gateway also performs **post‑processing sanitisation**—removing any inadvertent PII leaked by the NLG model, ensuring GDPR compliance.

---

**Non‑obvious insight:** Treating the knowledge base as a probability distribution lets the system expose an *expected utility* for each answer choice. This turns “pick the best answer” into a principled decision‑theoretic problem, improving consistency and allowing cost‑aware trade‑offs (e.g., faster responses vs. higher accuracy).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
