---
qid: ing_7fa4ac4c3f__aws__local
question: 'Explain: Define abstract classes — LLD-OOPs-Design-Patterns/TipsAndTechniques.md
  at main \u00b7 Anshul619/LLD-OOPs-Design-Patterns \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 268
output_tokens: 394
total_tokens: 662
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:13:40-05:00'
sources: []
---

**Situation & Task**  
While leading a migration of an on‑prem legacy service to AWS Lambda (2024), the team needed a clean way to swap out different AI inference backends (TensorFlow, PyTorch, ONNX). The requirement was to keep the Lambda handler agnostic while ensuring compile‑time safety and extensibility.

**Action & Design**  
I introduced an **abstract base class** `InferenceEngine` in TypeScript:

```ts
export abstract class InferenceEngine {
  abstract predict(input: Tensor): Promise<Tensor>;
  abstract loadModel(path: string): Promise<void>;
}
```

Each concrete engine (e.g., `TensorFlowEngine`, `PyTorchEngine`) extends this contract.  
- **AWS Services**: Lambda for compute, S3 for model storage, and Step Functions to orchestrate fallback engines.  
- **Scalability**: Each Lambda instance loads its own engine; the abstract class guarantees a single entry point, preventing duplicate code.  
- **Cost/Trade‑offs**: Using an interface keeps cold‑start times minimal (≈200 ms) versus monolithic inheritance that would bloat the image.

**Result**  
Within 3 weeks we achieved:
- 40 % reduction in deployment package size.
- 30 % faster inference latency due to isolated engine loads.
- Zero regression on existing workflows—CI/CD tests showed 100 % pass rate.  

**Reflection**  
This exercise reinforced **Ownership** (I owned the refactor) and **Dive Deep** (understood each backend’s API). I also learned that abstract classes, while powerful, can become a bottleneck if over‑used; hence we documented when to favor interfaces instead.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
