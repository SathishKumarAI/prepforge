---
qid: ing_726628f207__faang__local
question: 'Explain: API References — GitHub - microsoft/semantic-kernel: Integrate
  cutting-edge LLM technology quickly and easily into your apps \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 256
output_tokens: 514
total_tokens: 770
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:09:40-05:00'
sources: []
---

**Clarify**

The question asks how to use the *Semantic Kernel* API on GitHub (microsoft/semantic-kernel) to embed large‑language‑model (LLM) capabilities into applications quickly and simply.  
Assumptions I’d confirm:  

1. Target platform (C#, Python, or JavaScript).  
2. Desired LLM provider (Azure OpenAI, OpenAI, etc.).  
3. Whether the use case is chat, prompt orchestration, or skill composition.

**Approach**

1. **Add the SDK** – NuGet/ pip install `semantic-kernel`.  
2. **Configure a Kernel** – supply credentials and set up an `IChatCompletionService` (e.g., AzureOpenAIChat).  
3. **Create Skills** – write functions annotated with `[KernelFunction]` to expose domain logic.  
4. **Compose Prompts** – use the built‑in prompt templates or the new *PromptTemplate* class.  
5. **Execute** – call `kernel.RunAsync` or `kernel.GenerateAsync` passing the template and skill context.

**Depth**

```csharp
var kernel = Kernel.CreateBuilder()
    .AddAzureOpenAIChatCompletion(
        deploymentName: "gpt-4",
        endpoint: new Uri("https://<resource>.openai.azure.com/"),
        apiKey: "<key>")
    .Build();

kernel.ImportSkill(new WeatherSkill(), "weather");

var prompt = """
  Get the weather for {city} on {date}.
""";

var result = await kernel.RunAsync(
    contextVariables: new ContextVariables("city=Seattle; date=tomorrow"),
    prompt);
Console.WriteLine(result.GetValue<string>());
```

Complexity is O(1) per request, but network latency dominates. The SDK abstracts token handling and retry logic.

**Edge Cases**

- Missing or invalid credentials → throws `KernelException`.  
- Prompt syntax errors → parsed at runtime; ensure placeholders exist.  
- Rate limits → exponential back‑off handled by the kernel’s retry policy.

**Optimize & Communicate**

*Optimization*: cache frequent prompts, batch skill calls, and use streaming responses for large outputs.  
*Narration*: explain that Semantic Kernel turns LLMs into composable services—developers can mix native functions with model output without writing raw prompt engineering code, speeding time‑to‑value while keeping control over logic flow.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
