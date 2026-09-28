#!/bin/sh
# Restart the production server on :3000 (QA helper).
for p in $(ps -eo pid,args | awk '/next-server|next\/dist\/bin\/next start/ && !/awk/ {print $1}'); do kill "$p"; done
sleep 1
nohup npx next start -p 3000 > /tmp/claude-0/next.log 2>&1 &
sleep 4
curl -s -o /dev/null -w 'server %{http_code}\n' localhost:3000/
