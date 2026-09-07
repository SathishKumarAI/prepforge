---
qid: ing_05af47402a__faang__local
question: 'Explain: How to use these — Role Guides'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 495
total_tokens: 726
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:57:30-05:00'
sources: []
---

**1️⃣ Clarify**  
The interviewer asks how to “use role guides” in an AI context—likely referring to *role‑based prompts* that steer a model’s behavior (e.g., “You are a senior data scientist…”). I’d confirm:  
- Do we mean prompt templates or API wrappers?  
- Are we targeting GPT‑4, LLM inference servers, or fine‑tuned models?  
- What outcome do we want—consistent tone, domain expertise, safety?

**2️⃣ Approach**  
1. **Define the role** (expertise level, persona).  
2. **Create a prompt template** with placeholders for dynamic content.  
3. **Wrap in an API helper** that injects context and handles retries.  
4. **Validate output quality** via unit tests & human review.

**3️⃣ Depth**  
```python
class RoleGuide:
    def __init__(self, role_name: str, persona: str):
        self.template = f"Role: {role_name}\nPersona: {persona}\n\n{prompt}"
    
    def generate(self, prompt: str, **kwargs) -> str:
        text = self.template.format(**kwargs)
        return openai.ChatCompletion.create(
            model="gpt-4",
            messages=[{"role":"system","content":text}],
            temperature=0.2
        )["choices"][0]["message"]["content"]
```
*Complexity*: O(1) per request; latency dominated by the LLM call.  
*Trade‑offs*: Higher temperature → creativity vs. safety.

**4️⃣ Edge Cases**  
- **Prompt leakage**: Sensitive data in persona fields could surface.  
- **Misalignment**: Role description too generic leads to off‑topic responses.  
- **API limits**: Rapid calls may hit rate limits; implement back‑off.

**5️⃣ Optimize & Communicate**  
- Cache common role prompts to reduce latency.  
- Log prompt–response pairs for bias auditing.  
- Explain decisions in code comments and a README so teammates understand the role rationale.  

By structuring the guide as a reusable, testable component, we keep consistency across teams while allowing easy experimentation with different personas—exactly what FAANGs expect from a robust AI engineering solution.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
