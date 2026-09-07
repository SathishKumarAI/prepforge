---
qid: ing_f6e88dfdfc__aws__local
question: 'Explain: Example URL Patterns — Rest'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 227
output_tokens: 487
total_tokens: 714
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:34:59-05:00'
sources: []
---

**Situation & Task**  
At a startup building an image‑classification microservice, the product team needed a clean public API so that front‑end engineers could query predictions without exposing internal data pipelines. I owned the design of the RESTful URL patterns and had to balance *Customer Obsession* (easy consumption) with *Ownership* (maintainable code).

**Action – Design & Technical Choices**  
I mapped resources to nouns:  

```
GET    /v1/models/{modelId}/predict      ← single image
POST   /v1/predictions                   ← batch JSON payload
GET    /v1/models/{modelId}              ← model metadata
DELETE /v1/models/{modelId}              ← retire a model
```

*Why REST?*  
- **Scalability**: Stateless endpoints fit auto‑scaling EC2/Fargate containers.  
- **Availability**: Each endpoint maps to an ALB listener rule; failures are isolated to the specific route.  
- **Cost**: Simple GET/POST traffic is served by API Gateway + Lambda, keeping per‑request cost <$0.0004.

I added pagination (`?page=2&size=50`) for large batch results and HATEOAS links so consumers discover next actions without hardcoding URLs. All routes are versioned (`v1`) to preserve backward compatibility.

**Result**  
After launch, the API saw 150k calls/day with <0.5 ms latency on average. The front‑end team reported a 30 % reduction in integration bugs (tracked via Jira). I presented this design at the quarterly tech review, and the architecture was adopted company‑wide for all ML inference services.

**Learnings & Bar‑raiser Focus**  
- *Dive Deep*: I profiled cold starts and tuned Lambda memory to hit SLA targets.  
- *Ownership*: I wrote comprehensive OpenAPI docs and automated tests that guard against regressions.  
- *Quantified Impact*: 30 % fewer bugs → 1,200 man‑hours saved annually.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
