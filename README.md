# `aspect-cli-regression-repro`

Repro for a `bazel configure` regression in `aspect-cli` version `aspect/2025.05.46`.

## Notes
- `bazel configure` correctly identifies the `moment` dependency in `aspect/2025.03.28`
- `bazel configure` does not identify the `moment` dependency in `aspect/2025.05.46`
- If I remove the `/* webpackChunkName: "moment" */` comment it works on version  `aspect/2025.05.46`
- The latest version of the open source `aspect-cli` (built locally from `1e6308b7b1799c1b8716630efad35629aabe9d36`) works as exected
