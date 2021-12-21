FROM node:14

# Create app directory
WORKDIR /workspace
COPY . .

RUN apt-get update \
&& apt-get install ca-certificates  \
&& apt-get install fonts-liberation

RUN apt-get update
RUN apt-get install -y libatk-bridge2.0-0
RUN apt-get install -y libdrm-dev
RUN apt-get install -y libxkbcommon-dev
RUN apt-get install -y libgtk-3-dev
RUN apt-get install -y libappindicator3-1 
RUN apt-get install -y libasound2-dev
# RUN apt-get install libatk-bridge2.0-0 
RUN apt-get install libatk1.0-0 
RUN apt-get install libc6 
RUN apt-get install libcairo2 
RUN apt-get install libcups2 
RUN apt-get install libdbus-1-3 
RUN apt-get install libexpat1 
RUN apt-get install libfontconfig1 
# RUN apt-get install libgbm1 
RUN apt-get install libgcc1 
RUN apt-get install libglib2.0-0 
# RUN apt-get install libgtk-3-0 
RUN apt-get install libnspr4 
RUN apt-get install libnss3 
RUN apt-get install libpango-1.0-0 
RUN apt-get install libpangocairo-1.0-0 
RUN apt-get install libstdc++6 
RUN apt-get install libx11-6 
RUN apt-get install libx11-xcb1 
RUN apt-get install libxcb1 
RUN apt-get install libxcomposite1 
RUN apt-get install libxcursor1 
RUN apt-get install libxdamage1 
RUN apt-get install libxext6 
RUN apt-get install libxfixes3 
RUN apt-get install libxi6 
RUN apt-get install libxrandr2 
RUN apt-get install libxrender1 
RUN apt-get install libxss1 
RUN apt-get install libxtst6 
#RUN apt-get install lsb-release 
RUN apt-get install wget  
RUN apt-cache search libatk-bridge  

RUN apt-get install -y libatk-bridge2.0-0
# RUN apt-get install xdg-utils

RUN npm install 
