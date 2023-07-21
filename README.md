# Games ⚛️✅


```
keytool -genkey -v -keystore release.keystore -alias  com.wei.liang.games -keyalg RSA -keysize 2048 -validity 10000

bundletool build-apks --bundle=/MyApp/my_app.aab --output=/MyApp/my_app.apks
--ks=/MyApp/keystore.jks
--ks-pass=file:/MyApp/keystore.pwd
--ks-key-alias=MyKeyAlias
--key-pass=file:/MyApp/key.pwd
```