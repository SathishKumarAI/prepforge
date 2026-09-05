---
qid: ing_9deb6943eb__star__local
question: 'Explain: Code-First Evaluation — Pydantic Evals | Pydantic Docs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 372
total_tokens: 615
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:48:07-05:00'
sources: []
---

**Situation** – In a recent API project I had to expose a new machine‑learning model that accepted user‑generated text and returned sentiment scores. The backend was built in FastAPI, but the incoming payloads were unstructured and could contain typos or unexpected fields. Our QA team flagged inconsistent validation failures during integration tests.

**Task** – I needed to create a robust, type‑safe request schema that would automatically validate and convert inputs before they hit the model, while keeping the codebase clean and maintainable.

**Action** – I chose Pydantic’s *code‑first* approach. First, I defined a `SentimentRequest` class inheriting from `BaseModel`, adding fields like `text: str = Field(..., min_length=1)` and an optional `lang: str`. Using the `@validator` decorator, I implemented a custom method that normalizes whitespace and strips emojis. Then, leveraging Pydantic’s *eval* feature, I wrote a simple expression `score: float = (len(text) % 3) / 10` to pre‑compute a heuristic score as part of validation—this mimicked the real model call without external dependencies. Finally, I registered the model with FastAPI via `app.post("/sentiment", response_model=SentimentResponse)`.

**Result** – Validation errors dropped from ~12% to <1%, and the endpoint now returns consistent JSON responses in under 5 ms. The team praised the clear schema for reducing bugs, and I learned that Pydantic’s evals can be used not just for type checks but also for lightweight pre‑processing logic, keeping runtime overhead minimal.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
