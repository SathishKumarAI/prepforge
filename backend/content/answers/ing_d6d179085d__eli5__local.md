---
qid: ing_d6d179085d__eli5__local
question: 'Explain: Qwen2.5-Coder trains with repository-level fill-in-the-middle
  using special tokens like `<|fim_prefix|>`, `<|fim_suffix|>`, `<|fim_middle|>`,
  `<|repo_name|>`, and `<|file_sep|>`. Write the function that formats a repo-level
  FIM training example, and explain why repo-level beats file-level for real code
  completion.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 379
total_tokens: 609
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:14:52-05:00'
sources: []
---

Imagine you’re teaching a student to finish a sentence by giving them the beginning and the end of a story, but letting them decide what comes in between.  
In repo‑level FIM (Fill‑in‑the‑Middle) we do exactly that for whole projects: we give the model a “prefix” that contains everything before the missing piece, an “suffix” that contains everything after it, and the model must invent the middle. The special tokens are simply labels that tell the model which part is which.

```python
def format_repo_fim(repo_name, prefix, suffix):
    """
    Build a single training example for repo‑level FIM.
    
    Parameters:
        repo_name (str)   – name of the repository.
        prefix (str)      – text before the missing chunk.
        suffix (str)      – text after the missing chunk.
        
    Returns:
        str – formatted string with special tokens.
    """
    return (
        f"<|repo_name|>{repo_name}<|file_sep|>"
        f"<|fim_prefix|>{prefix}"
        f"<|fim_middle|>"
        f"<|fim_suffix|>{suffix}"
    )
```

**Why repo‑level beats file‑level for real code completion**

When the model sees an entire repository (many files, imports, tests) in the prefix, it learns how the pieces of a project fit together—just like a student who knows the whole plot can guess the missing sentence. File‑level training only shows one file at a time, so the model misses cross‑file context (e.g., a helper function used elsewhere). Repo‑level gives that broader view, letting the AI generate more accurate and coherent code snippets for real projects.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
