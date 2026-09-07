---
qid: ing_5194fddf6b__faang__local
question: 'Explain: Create custom evaluator — Ai Evals Complete Guide Langwatch Langfuse'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 706
total_tokens: 944
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:54:10-05:00'
sources: []
---

**Clarify**

You want a reusable *custom evaluator* that scores LLM responses against user‑defined criteria (e.g., factuality, style) using **AiEvals**, while visualizing runs with **LangWatch** and logging telemetry in **Langfuse**.  
Assumptions to confirm:  

- You have an OpenAI‑compatible model exposed via LangChain.  
- AiEvals is installed (`pip install aievals`).  
- LangWatch and Langfuse SDKs are set up and authenticated.

---

**Approach**

1. **Define evaluation metric** – create a subclass of `aievals.evaluator.BaseEvaluator` implementing `evaluate`.  
2. **Wrap the LLM chain** – build a LangChain `LLMChain` that feeds prompts to the model.  
3. **Hook into AiEvals** – pass the chain and evaluator to `aievals.run_evaluation`.  
4. **Integrate LangWatch** – wrap the chain with `langwatch.monitor()` to capture token usage, latency, and visualize via the dashboard.  
5. **Send telemetry to Langfuse** – within the evaluator, log each response (`Langfuse.trace`) with metadata (prompt, score, timestamp).

---

**Depth**

```python
from aievals import BaseEvaluator, run_evaluation
from langchain.chat_models import ChatOpenAI
from langwatch import monitor
import langfuse

class FactualityEvaluator(BaseEvaluator):
    def evaluate(self, response: str) -> float:
        # simple heuristic or external fact‑checking API
        return 1.0 if "verified" in response.lower() else 0.0

langfuse.init(api_key="...", host="https://api.langfuse.com")

llm = ChatOpenAI(model_name="gpt-4")
chain = monitor(LLMChain(llm=llm, prompt=PromptTemplate.from_template("{text}")))

results = run_evaluation(
    chain,
    evaluator=FactualityEvaluator(),
    prompts=["What is 2+2?"],
    n=1
)
```

Complexity: O(N × T) where *N* = number of prompts, *T* = tokens per prompt.  
Trade‑offs: custom evaluator adds latency; use caching if evaluation expensive.

---

**Edge Cases**

- Empty or malformed prompts → return score 0 and log warning.  
- Model timeout → catch exception, assign minimal score.  
- LangWatch/Langfuse failures → fallback to local logging.

---

**Optimize & Communicate**

1. **Batch evaluation** – process multiple responses in parallel to reduce round‑trips.  
2. **Cache evaluator results** for identical prompts.  
3. **Explainability** – expose raw scores and token logs via LangWatch dashboards; add a summary column in Langfuse UI.

When presenting, walk through the data flow diagram, highlight how each component (AiEvals → LangWatch → Langfuse) decouples concerns, and quantify expected latency improvements with caching. This demonstrates structured problem solving, depth of knowledge, and clear communication—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
