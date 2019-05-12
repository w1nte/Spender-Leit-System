# Spender-Leit-System

The Spender-Leit-System (short SLS) is a webbased Application, that informs your Donors / Customers or Patients in the
waiting area if they in turn. 

You can easily set up the SLS on a Raspberry PI and its accessible over any device that supports browsing the web.
The SLS itself is also controllable over any internet device.

**Idea & First User:** Rotes Kreuz Ortsstelle St.Leonhard / Ruprechtshofen 

## Installation (Raspberry PI)

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

Die Seite sollte nun über ```http://serverip:8000/view.html``` erreichbar sein.
Das Controlcenter kann über ```http://serverip:8000/``` erreicht werden.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.