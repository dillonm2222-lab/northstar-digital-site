@echo off
REM ============================================================
REM  NSD Pricing Sync 2026-07-03 — one click, then merge on GitHub
REM  What this does:
REM   1. Clears any stale git lock / corrupt index
REM   2. Creates fresh branch pricing-sync-2026-07-03 off origin/main
REM   3. Applies the 6 corrected files from _pricing-sync-2026-07-03\
REM   4. Commits and pushes the branch (Vercel builds a preview)
REM  It does NOT touch main directly. Merge the PR on GitHub when
REM  the Vercel preview looks right.
REM ============================================================
cd /d "%~dp0"

if exist .git\index.lock del /f .git\index.lock

git fetch origin
if errorlevel 1 goto :err

git checkout -f -B pricing-sync-2026-07-03 origin/main
if errorlevel 1 (
  echo Index looked corrupt - rebuilding it...
  del /f .git\index
  git checkout -f -B pricing-sync-2026-07-03 origin/main
  if errorlevel 1 goto :err
)

xcopy "_pricing-sync-2026-07-03\src" "src" /E /Y /I
if errorlevel 1 goto :err

git add src
git commit -m "Pricing sync 2026-07-03: fix GBP page fake $447 one-time, align tiers with 20-service matrix, 'no confusing add-ons' -> 'no hidden fees', correct services page tier claims (automation=Core, AI Voice=add-on)"
if errorlevel 1 goto :err

git push -u origin pricing-sync-2026-07-03
if errorlevel 1 goto :err

echo.
echo ============================================================
echo  SUCCESS. Now: github.com/dillonm2222-lab/northstar-digital-site
echo  ^> open the pricing-sync-2026-07-03 branch ^> create PR ^> check
echo  the Vercel preview ^> merge into main to go live.
echo ============================================================
pause
exit /b 0

:err
echo.
echo ***** SOMETHING FAILED - stop and show Claude this window. *****
pause
exit /b 1
