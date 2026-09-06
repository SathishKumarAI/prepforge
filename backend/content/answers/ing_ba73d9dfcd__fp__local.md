---
qid: ing_ba73d9dfcd__fp__local
question: 'Q: How do you safely run Claude Code in production CI?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 597
total_tokens: 769
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:40:11-05:00'
sources: []
---

### Why the “Claude‑Code” pipeline needs a principled safety net

The core problem is **untrusted code executing on shared resources**.  
If a model can emit arbitrary Python that runs in your CI, you expose the build machine to:

1. **Resource exhaustion** (CPU, memory, I/O).  
2. **Privilege leakage** (access to secrets or network).  
3. **State corruption** (modifying repository or external services).

To guarantee safety we must enforce a *bounded* execution environment that respects three invariants:

| Invariant | Formal requirement | Why it matters |
|-----------|--------------------|----------------|
| Isolation | Each job runs in its own container with `--user` non‑root and minimal capabilities. | Prevents cross‑job contamination. |
| Resource limits | CPU quota, memory ceiling, disk quota, and network egress disabled unless explicitly whitelisted. | Keeps runaway code from crippling the CI host. |
| Provenance | The image is signed by a trusted registry; the entrypoint script validates the model’s signature before execution. | Ensures only vetted Claude‑generated code runs. |

### A minimal recipe

1. **Build a hardened base**  
   ```Dockerfile
   FROM python:3.12-slim
   RUN apt-get update && apt-get install -y --no-install-recommends \
         ca-certificates curl jq; rm -rf /var/lib/apt/lists/*
   USER nonroot:nogroup
   ```
2. **Entrypoint guard**  
   ```bash
   #!/usr/bin/env bash
   set -euo pipefail
   if ! curl -fsSL https://registry.example.com/claude.sig | sha256sum --check; then
     echo "Signature mismatch" >&2
     exit 1
   fi
   exec python "$@"
   ```
3. **CI job**  
   ```yaml
   run_claude:
     image: registry.example.com/claude-base:sha-abcdef
     cpu: 0.5
     memory: 512MiB
     network_mode: none
     script:
       - python claude_output.py
   ```

### Non‑obvious insight

Most people focus on “run as non‑root” and “set limits”, but **the entrypoint’s signature verification is the missing lockstep**.  
Without it, a malicious model could still masquerade as an approved image by exploiting CI cache layers or registry misconfigurations.  
By tying the container image to a cryptographic hash of the generated code, you enforce *integrity* at the very first byte of execution, closing the most subtle attack surface.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
