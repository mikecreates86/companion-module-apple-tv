# About this copy

This is Mike's copy of Chris Busillo's
[Apple TV Companion module](https://github.com/cbusillo/companion-module-apple-tv).
The module code comes from that project; this copy adds an automatic download.

## Downloading the module

1. Open this repo on GitHub and click **Releases** on the right side.
2. Under the release marked **Latest**, click **apple-tv-x.y.z.tgz** to download it.
3. In Companion, open **Modules** and choose **Import module package**, then pick the file.

Every change that lands on `main` and passes the checks publishes a new release
with a higher version number, so Companion always accepts the newer file.
The version is chosen by `.github/scripts/next-version.mjs`.

## Sharing status

- Shared with the original project: nothing yet.
- Pending: nothing. This copy matches the original project's code.
- Church-specific only: the release workflow (`.github/workflows/release.yaml`)
  and this file.
