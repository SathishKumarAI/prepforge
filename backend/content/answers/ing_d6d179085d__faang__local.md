---
qid: ing_d6d179085d__faang__local
question: 'Explain: Qwen2.5-Coder trains with repository-level fill-in-the-middle
  using special tokens like `<|fim_prefix|>`, `<|fim_suffix|>`, `<|fim_middle|>`,
  `<|repo_name|>`, and `<|file_sep|>`. Write the function that formats a repo-level
  FIM training example, and explain why repo-level beats file-level for real code
  completion.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 305
output_tokens: 626
total_tokens: 931
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:58:45-05:00'
sources: []
---

**Clarify**  
We need a helper that takes a repository’s source files and turns them into one *repo‑level* “fill‑in‑the‑middle” (FIM) example for Qwen2.5‑Coder. The example should contain the special tokens `<|fim_prefix|>`, `<|fim_suffix|>`, `<|fim_middle|>`, `<|repo_name|>` and `<|file_sep|>`.  
Assumptions:  
- `files` is a dict `{path: content}` sorted by path.  
- The middle section to be predicted will be a single file’s snippet (or the whole file).  
- We want to preserve repository context while keeping the prompt short enough for the model.

**Approach**  
1. Pick a target file (`target_path`).  
2. Build `prefix` = repo name + all files *before* the target, each separated by `<|file_sep|>`.  
3. Build `suffix` = all files *after* the target, likewise.  
4. The `middle` will be the content of the target file (or a masked span).  
5. Concatenate with the special tokens in order.

**Depth**  
```python
def format_repo_fim(repo_name: str,
                    files: Dict[str, str],
                    target_path: str) -> str:
    """Return one repo‑level FIM example."""
    sorted_paths = sorted(files.keys())
    prefix_parts, suffix_parts = [], []

    for p in sorted_paths:
        if p == target_path:
            continue
        part = f"<|repo_name|>{repo_name}<|file_sep|>{p}<|file_sep|>{files[p]}"
        if p < target_path:  # lexicographic order mimics file tree
            prefix_parts.append(part)
        else:
            suffix_parts.append(part)

    prefix = "<|fim_prefix|>" + "".join(prefix_parts)
    middle = files[target_path]          # or a masked span
    suffix = "<|fim_suffix|>" + "".join(suffix_parts)

    return f"{prefix}<|fim_middle|>{middle}{suffix}"
```
Complexity: **O(N)** in the number of files; memory linear to repo size.

**Edge cases**  
- Empty repo → raise ValueError.  
- Target file not present → KeyError.  
- Very large repos may exceed token limits—chunking or sampling is required.  

**Optimize & communicate**  
Using a repo‑level prompt gives the model *global context* (imports, type definitions, build scripts) that a single file prompt cannot provide. It also reduces the number of training examples per repo, improving data efficiency. In practice, we can cache prefixes/suffixes and reuse them across many targets to lower runtime cost. This approach mirrors Qwen2.5‑Coder’s design: richer context → better code completion accuracy.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
