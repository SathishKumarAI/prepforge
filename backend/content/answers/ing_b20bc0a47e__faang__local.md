---
qid: ing_b20bc0a47e__faang__local
question: 'Explain: Design patterns — 11 Steps to Go From Junior to Senior Developer'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 645
total_tokens: 883
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:37:56-05:00'
sources: []
---

**Clarify**  
The interview asks for a *road‑map* of design‑pattern mastery that takes a junior ML engineer to senior status.  
Assumptions:  
- The candidate has basic Python/ML libraries (scikit‑learn, PyTorch/TensorFlow).  
- “Design patterns” refers to reusable software‑engineering solutions, not ML‑specific tricks.  
- We’re focusing on code quality, scalability, and maintainability in production ML pipelines.

**Approach**  
1. List the 11 canonical patterns (Factory, Builder, Singleton, Observer, Strategy, Decorator, Command, Adapter, Facade, Template Method, Proxy).  
2. For each, explain its *purpose* in an ML context (e.g., Factory for model zoo, Strategy for loss functions).  
3. Show a concrete code snippet that transforms a naive implementation into a pattern‑based one.  
4. Summarize the impact on testability, extensibility, and performance.

**Depth**  

| Pattern | Typical ML Use | Example Refactor |
|---------|----------------|-----------------|
| **Factory** | Instantiating models/optimizers from config | `ModelFactory.build(cfg)` |
| **Builder** | Constructing complex pipelines (pre‑processing → model) | `PipelineBuilder().add(step).build()` |
| **Singleton** | Global config / logger | `Config.instance()` |
| **Observer** | Hook into training loop for callbacks | `Trainer.register(callback)` |
| **Strategy** | Switching loss or optimizer at runtime | `LossStrategy` |
| **Decorator** | Adding metrics without altering core code | `@log_metrics` |
| **Command** | Queueing inference requests | `InferenceCommand.execute()` |
| **Adapter** | Wrapping third‑party data loaders | `DataLoaderAdapter(pytorch_loader)` |
| **Facade** | Exposing a simple API over complex inference stack | `ModelService.predict()` |
| **Template Method** | Standard training skeleton with hooks | `BaseTrainer.train()` |
| **Proxy** | Lazy loading of large models | `LazyModelProxy` |

**Edge Cases**  
- Over‑engineering: patterns add boilerplate; use only when a problem repeats.  
- Performance hits: e.g., Singleton can become contention point in multi‑threaded training.  
- Testing brittleness: ensure each pattern is unit‑testable (e.g., inject dependencies).

**Optimize & Communicate**  
*Improvements*: Combine Builder + Facade for pipeline construction; use Dependency Injection to swap strategies at runtime.  
*Narration*: “I first identified the recurring pain point—instantiating diverse models from YAML. A Factory decouples config from code, letting me add new architectures without touching the training loop. Next, I wrapped the pipeline in a Builder so that adding/removing preprocessing steps is a one‑liner.”  

*Takeaway*: Mastery of these patterns equips an ML engineer to build robust, testable, and extensible systems—key traits for senior roles at FAANG.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
