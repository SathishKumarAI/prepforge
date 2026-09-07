---
qid: ing_cd3a5385fd__aws__local
question: 'Explain: Signatures: Describing the Task — Dspy'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 491
total_tokens: 722
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:04:59-05:00'
sources: []
---

**Answer (Amazon‑style)**  

During a recent project I had to build an AI‑driven code‑generation pipeline for our internal tooling. The core requirement was *“Describe the task using signatures so that DSPy can reason about it.”*  
- **Situation:** Our developers were spending 30 % of sprint time on boilerplate code, and we needed a reusable prompt pattern.  
- **Task (Signature):** I defined a signature in DSPy:  

```python
from dspy import Signature

class GenerateEndpoint(Signature):
    """Generate FastAPI endpoint from natural‑language description."""
    description = dspy.InputField()
    endpoint_code = dspy.OutputField()
```

This signature tells DSPy that the *input* is a plain text description and the *output* is Python code.  
- **Action:** I wired the signature to a large language model via AWS Bedrock, added a few-shot prompt template, and wrapped it in an `InferenceWrapper`. The wrapper logs token usage so we can bill accurately.  
- **Result:** After two sprints, our team reduced boilerplate creation time from 5 hrs/month to <30 min, a 92 % productivity gain (≈$12k annual savings).  

**Leadership Principles Highlighted**

| Principle | How it Shines |
|-----------|---------------|
| *Customer Obsession* | Delivered a tool that directly cuts developer toil. |
| *Ownership* | Built end‑to‑end pipeline, from signature to deployment on ECS Fargate. |
| *Dive Deep* | Analyzed token costs, latency, and error patterns; tuned prompt for 0.8 BLEU score. |

**Bar‑raiser check:**  
- **Ownership:** I handled all stages—definition, testing, monitoring.  
- **Depth:** I logged inference metrics, compared multiple LLMs (Claude vs. GPT‑4), and chose the most cost‑effective one.  
- **Quantified Impact:** 92 % time savings, $12k annual cost reduction.  
- **Learning from Failure:** Initial attempts over‑generated code; after adding a validation step with `pydantic`, we cut syntax errors by 80 %.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
