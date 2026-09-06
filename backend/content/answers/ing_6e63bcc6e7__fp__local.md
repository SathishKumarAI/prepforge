---
qid: ing_6e63bcc6e7__fp__local
question: 'Explain: Installation — GitHub - microsoft/semantic-kernel: Integrate cutting-edge
  LLM technology quickly and easily into your apps \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 192
output_tokens: 448
total_tokens: 640
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:59:23-05:00'
sources: []
---

### Why the “semantic‑kernel” install pattern works

Semantic Kernel is a lightweight runtime that turns any LLM into a *first‑class* service for your app.  
Its core problem: **how to expose a model’s inference as a composable, type‑safe API without reinventing I/O or serialization each time**.  
The solution follows three deep principles:

1. **Dependency inversion** – the kernel declares an abstract `IChatCompletionService`.  
   Your code depends on the interface, not the concrete provider (OpenAI, Azure, local).  
2. **Plug‑and‑play via DI containers** – by exposing a single extension method (`AddSemanticKernel`) you let ASP.NET Core’s built‑in container wire up all plumbing automatically.  
3. **Convention over configuration** – the repository ships a minimal `appsettings.json` template and a *semantic‑kernel* CLI that generates the necessary secrets file, so developers can start with a single command.

When you clone `microsoft/semantic-kernel`, run:

```bash
dotnet new console -n MyApp
cd MyApp
dotnet add package Microsoft.SemanticKernel --prerelease
dotnet add package Microsoft.SemanticKernel.AI.OpenAI
```

and then in `Program.cs`:

```csharp
var builder = Host.CreateDefaultBuilder(args)
    .ConfigureServices((_, services) =>
        services.AddSemanticKernel(kernel => kernel.WithOpenAiChatCompletion("api-key")));
var host = builder.Build();
await host.RunAsync();
```

The *non‑obvious insight* is that the kernel’s `WithXxx` factories **cache** the provider instance per request scope. This guarantees thread safety while keeping latency low—something most SDKs forget, leading to race conditions or excessive token usage.

Thus, installation is not just a copy‑paste; it’s an architectural choice that enforces clean boundaries, makes swapping models trivial, and embeds best‑practice concurrency handling right out of the box.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
