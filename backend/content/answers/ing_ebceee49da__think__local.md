---
qid: ing_ebceee49da__think__local
question: 'Explain: Agent with Plugins - Python — GitHub - microsoft/semantic-kernel:
  Integrate cutting-edge LLM technology quickly and easily into your apps \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 215
output_tokens: 530
total_tokens: 745
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T16:35:31-05:00'
sources: []
---

### Explaining “Agent with Plugins” in the Microsoft Semantic Kernel Project

**1. What it means:**  
- *Agent* – a software component that can receive user input, reason about it, and produce an output (e.g., answer questions or perform tasks).  
- *Plugins* – reusable modules that add specific capabilities to an agent (such as calling a weather API, translating text, or accessing a database).  
- In the Semantic Kernel repository, the “Agent with Plugins” example shows how you can compose a language‑model–driven agent and then extend it by plugging in extra services.

**2. How it works technically:**  
1. **Kernel initialization** – create a `Kernel` object that loads an LLM (e.g., OpenAI GPT‑4).  
2. **Define skills** – each plugin is packaged as a *skill* containing one or more functions decorated with `@kernel_function`. These functions expose the plugin’s API to the kernel.  
3. **Register plugins** – call `kernel.import_skill(...)` for each skill you want the agent to use.  
4. **Prompt construction** – build a prompt that calls the desired skill (e.g., `"weather.getForecast(location='Seattle')"`) and let the LLM orchestrate the call.  
5. **Execution** – the kernel parses the prompt, resolves the function name, invokes the corresponding plugin, captures its result, and returns it to the user.

**3. Why it matters:**  
- Keeps the core agent lightweight while allowing domain‑specific logic to live in separate plugins.  
- Enables rapid iteration: add or swap a plugin without retraining the LLM.  
- Promotes code reuse across projects because skills are just Python functions that can be imported elsewhere.

**4. Quick demo steps (Python):**

```python
from semantic_kernel import Kernel

kernel = Kernel()
# Load OpenAI GPT‑4
kernel.add_service(OpenAIService(api_key="..."))

# Import a weather skill from the repo
weather_skill = kernel.import_skill("skills/weather")
# Use it in a prompt
response = await kernel.run(
    "What’s the forecast for Seattle tomorrow?",
    plugins=[weather_skill]
)
print(response)
```

**5. Take‑away:**  
The “Agent with Plugins” pattern turns an LLM into a *smart orchestrator* that delegates specialized tasks to well‑defined, testable Python modules—making it easy to build sophisticated, extensible AI applications.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
