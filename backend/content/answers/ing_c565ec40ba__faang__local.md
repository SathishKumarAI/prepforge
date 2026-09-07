---
qid: ing_c565ec40ba__faang__local
question: 'Explain: Basic Agent - Python — GitHub - microsoft/semantic-kernel: Integrate
  cutting-edge LLM technology quickly and easily into your apps \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 258
output_tokens: 626
total_tokens: 884
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:19:50-05:00'
sources: []
---

**Clarify**  
You’re asking for a concise walkthrough of the *Basic Agent* example in Microsoft’s Semantic Kernel (GitHub repo `microsoft/semantic-kernel`). The goal is to understand how the agent stitches together an LLM with application logic in Python—i.e., what components are involved, how they interact, and why it’s “quick & easy.” I’ll assume you’re familiar with Python basics and have an Azure OpenAI or similar key ready.

**Approach**  
1. Identify core objects: `Kernel`, `KernelBuilder`, `ChatCompletionService`.  
2. Show the minimal code that creates a kernel, registers the LLM service, builds a simple function (e.g., “weather”), and invokes it via an agent.  
3. Highlight how the agent abstracts prompt engineering and context handling.

**Depth**  
```python
from semantic_kernel import Kernel
from semantic_kernel.connectors.ai.open_ai import OpenAIChatCompletionService

# 1️⃣ Build kernel with LLM
kernel = (
    Kernel()
    .add_service(
        OpenAIChatCompletionService(
            service_id="chat",
            api_key=os.getenv("AZURE_OPENAI_KEY"),
            endpoint=os.getenv("AZURE_OPENAI_ENDPOINT"),
            deployment_name="gpt-4o-mini"
        )
    )
)

# 2️⃣ Register a simple function (user intent)
kernel.add_function_from_file(
    "weather.py",   # contains a prompt template + logic
    "WeatherAgent",
    name="get_weather"
)

# 3️⃣ Create agent that routes user input to the function
from semantic_kernel.agents import KernelAgent

agent = KernelAgent(kernel, default_function_name="get_weather")

# 4️⃣ Invoke
response = agent.invoke("What's the weather in Seattle tomorrow?")
print(response.output_text)
```
*Complexity*: O(1) for kernel init; each invocation is an LLM call (latency ≈ seconds). The agent handles prompt concatenation, token budgeting, and retry logic.  
*Trade‑offs*: Tight coupling to OpenAI; swapping providers requires minimal changes thanks to the service abstraction.

**Edge Cases**  
- Missing environment vars → raise clear config errors.  
- Function not found → fallback to default LLM completion.  
- Token limits exceeded → automatic chunking or user‑prompt truncation.  

Testing: unit‑test `add_function_from_file` for correct template loading; integration test with a mocked LLM service to assert prompt composition.

**Optimize & Communicate**  
Future improvements could cache embeddings, add streaming output, and expose a REST wrapper. I’d explain the design by mapping each step back to “quick integration” (one‑liner kernel build) and “ease of extension” (plug in new functions without touching core). This shows clear problem understanding, structured solution, depth, and awareness of edge conditions—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
