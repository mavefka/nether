echo off
title Nether v13
color c
cls
:a
node --expose-gc --optimize-for-size --max-old-space-size=2048 shRai.js
goto a
pause