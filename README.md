# Blutspenden Visualisierung fürs Rote Kreuz Niederösterreich

## Installation (Ubuntu / Raspi)

```
sudo apt update
sudo apt install nodejs npm git
npm install -g pm2
cd ~
git clone git@github.com:w1nte/RKBlutspendenVisualisierung.git
cd BlutspendenVisualisierung/nodejs
pm2 start app.js -i 1
pm2 startup
```

Die Seite sollte nun über ```http://serverip:8000/``` erreichbar sein.
Das Controlcenter kann über ```http://serverip:8000/control.html``` erreicht werden.
