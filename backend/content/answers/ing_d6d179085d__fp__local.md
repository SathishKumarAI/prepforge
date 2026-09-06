---
qid: ing_d6d179085d__fp__local
question: 'Explain: Qwen2.5-Coder trains with repository-level fill-in-the-middle
  using special tokens like `<|fim_prefix|>`, `<|fim_suffix|>`, `<|fim_middle|>`,
  `<|repo_name|>`, and `<|file_sep|>`. Write the function that formats a repo-level
  FIM training example, and explain why repo-level beats file-level for real code
  completion.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 637
total_tokens: 879
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:36:52-05:00'
sources: []
---

**Why repo‑level FIM outperforms file‑level**

The core of code‑completion is *contextual inference*: the model must predict a missing fragment given everything that can influence it—imports, helper functions, data structures, and cross‑file API contracts.  
At the file level, the context window truncates after one source file, so inter‑module references are lost. A repo‑level example preserves **semantic boundaries** (`<|repo_name|>`, `<|file_sep|>`), letting the model learn that a function in `utils.py` can be called from `main.py`. This mirrors real usage where the editor supplies an entire repository as context, not just a single file.  
Mathematically, repo‑level FIM increases the *effective sequence length* \(L_{\text{eff}}\) while keeping the same token budget: we concatenate files with separators instead of discarding them. The probability model \(P(\text{middle}\mid \text{prefix},\text{suffix})\) becomes conditioned on a richer joint distribution over the repo’s AST, improving generalisation to unseen projects.

**Formatting function**

```python
def format_repo_fim_example(repo_name: str,
                            files: dict[str, str],
                            target_file: str,
                            prefix: str,
                            suffix: str,
                            middle_placeholder: str = "<|fim_middle|>") -> str:
    """
    Build a repo‑level FIM training string.

    Parameters
    ----------
    repo_name : str
        Identifier of the repository.
    files : dict[str, str]
        Mapping from file path to its full source text.
    target_file : str
        Path (key in `files`) that contains the missing fragment.
    prefix, suffix : str
        Code before and after the missing part inside `target_file`.
    middle_placeholder : str
        Token representing the unknown code.

    Returns
    -------
    str
        Concatenated string ready for training:
            <|repo_name|>{repo_name}<|file_sep|>
            ... (other files) ...
            <|repo_name|>main.py<|fim_prefix|>{prefix}
            {middle_placeholder}
            <|fim_suffix|>{suffix}<|file_sep|>
    """
    parts = [f"<|repo_name|>{repo_name}"]
    for path, text in sorted(files.items()):
        # Replace the target file’s middle with a placeholder
        if path == target_file:
            content = f"{prefix}{middle_placeholder}{suffix}"
        else:
            content = text
        parts.append(f"<{path}><|fim_prefix|>{content}<|file_sep|>")
    return "\n".join(parts)
```

The function preserves every file, tags the repository, and marks the missing fragment with `<|fim_middle|>`, enabling the model to learn *cross‑file dependencies*—the subtle insight that real code completion must consider the entire project, not a single file.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
