---
qid: ing_d9fa6812eb__faang__local
question: 'Explain: Installing with Kuzu Support — GitHub - getzep/graphiti: Build
  Real-Time Knowledge Graphs for AI Agents \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 256
output_tokens: 643
total_tokens: 899
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:05:47-05:00'
sources: []
---

**1️⃣ Clarify**  
You’re asking how to install the *getzep/graphiti* package **with Kuzu database support**. I’ll assume:  

- You have a Unix‑like system (Linux/macOS) with `git`, `cmake`, `gcc`/`clang`.  
- You need the latest release (not a specific tag).  
- Your environment can build C++17 code and has Python 3.8+.  

**2️⃣ Approach**  
1. Clone the repo.  
2. Install Kuzu prerequisites (CMake, SQLite, Boost).  
3. Configure CMake to enable `KUZU` option.  
4. Build & install Graphiti.  
5. Verify via a quick Python import and a sample graph load.

**3️⃣ Depth**

```bash
# 1. Clone
git clone https://github.com/getzep/graphiti.git
cd graphiti

# 2. Install Kuzu dependencies (example for Ubuntu)
sudo apt-get install -y cmake libboost-all-dev libsqlite3-dev

# 3. Build with Kuzu enabled
mkdir build && cd build
cmake .. -DKUZU=ON   # pulls in Kuzu submodule automatically
make -j$(nproc)

# 4. Install (optional)
sudo make install

# 5. Verify
python3 -c "import graphiti; print('Graphiti loaded with', graphiti.backend)"
```

- **CMake flag** `-DKUZU=ON` tells Graphiti to compile the Kuzu‑specific backend and link against its C++ library.  
- If you want a *system‑wide* install, add `-DCMAKE_INSTALL_PREFIX=/usr/local`.  
- The build outputs two Python wheels (`graphiti_kuzu‑*.whl`) that can be pip‑installed.

**4️⃣ Edge Cases**

| Scenario | What breaks? | Test |
|----------|--------------|------|
| Missing Boost or SQLite | CMake fails at `find_package` | Verify with `cmake --debug-output ..` |
| Older GCC (<9) | C++17 features not supported | Check compiler version: `gcc -v` |
| Windows users | Path separators, MSVC toolchain | Use WSL or Docker image |
| No Kuzu repo submodule | `git clone` will skip it | Ensure `--recursive` or run `git submodule update --init` |

**5️⃣ Optimize & Communicate**

- **Caching**: Build in a Docker container to avoid recompiling dependencies on each machine.  
- **Parallel install**: Use `pip install graphiti_kuzu‑*.whl` after build to skip Python setup overhead.  
- **Documentation**: Add a README section “Installing with Kuzu” that automates the steps and notes common pitfalls.

*Result:* A ready‑to‑use Graphiti package backed by Kuzu, enabling real‑time knowledge graph operations for AI agents.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
