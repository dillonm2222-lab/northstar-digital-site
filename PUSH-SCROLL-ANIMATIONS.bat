@echo off
REM Push the rescued scroll-animations branch (rebased on current main, build verified 26 pages)
REM Built by Claude 2026-07-01. Old feature/scroll-animations branch is superseded by this one.
cd /d "%~dp0"
git push origin feature/scroll-animations-v2
echo.
echo Done. Now open the PR:
echo https://github.com/dillonm2222-lab/northstar-digital-site/compare/main...feature/scroll-animations-v2
echo Review the Vercel preview, then merge. After merge you can delete the OLD
echo feature/scroll-animations branch on GitHub (superseded).
pause
