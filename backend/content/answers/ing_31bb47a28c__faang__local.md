---
qid: ing_31bb47a28c__faang__local
question: 'Explain: Implement structured logging — ''10 Principles for Building Resilient
  Payment Systems'''
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 504
total_tokens: 744
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:39:49-05:00'
sources: []
---

**Clarify**  
You’re asked to *implement structured logging* while keeping in mind the “10 Principles for Building Resilient Payment Systems” (e.g., reliability, security, observability). I’ll assume we’re adding a logger to an existing payment micro‑service written in Go.

**Approach**  
1. Pick a JSON‑serializing library (`logrus`, `zap`).  
2. Define a log schema: `timestamp`, `level`, `component`, `request_id`, `user_id`, `event`, `error_code`.  
3. Wrap the HTTP handler to inject `request_id` (UUID) into context.  
4. Create helper functions (`Infof(ctx, msg, kv…)`, `Errorw`) that pull the ID from context and output a single JSON record.  
5. Configure an async log writer (e.g., Lumberjack for rotation).  

**Depth**  
```go
type Logger struct{ l *zap.Logger }

func NewLogger() *Logger {
    cfg := zap.NewProductionConfig()
    cfg.OutputPaths = []string{"stdout"}
    logger, _ := cfg.Build()
    return &Logger{l: logger}
}

func (lg *Logger) Info(ctx context.Context, msg string, kv ...interface{}) {
    lg.l.Info(msg, append(kv,
        "request_id", ctx.Value("reqid"),
        "component", "payment",
    )...)
}
```
*Complexity*: O(1) per log; async writing keeps latency minimal.  
*Trade‑offs*: JSON is verbose but machine‑readable; using a binary encoder (`protobuf`) could reduce size but sacrifices human readability.

**Edge Cases**  
- Missing `request_id`: fall back to `"unknown"`.  
- Corrupted context: log with a warning, don’t panic.  
- High volume bursts: test backpressure handling of the writer.

**Optimize & Communicate**  
Explain that structured logs enable correlation across services (Principle 2: Observability), and embedding `error_code` satisfies Principle 7 (Graceful degradation). Highlight how JSON logs integrate with ELK/Datadog for real‑time alerting, thus meeting resilience goals. Conclude by noting you’d add unit tests for context extraction and benchmark the logger under 10k RPS to ensure it doesn’t become a bottleneck.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
