# coding:utf-8

import requests

# res = requests.get("https://www.yunaq.com/").content.decode("utf-8")

body = """
cookie=('_')+('_')+('j')+('s')+('l')+('_')+('c')+('l')+('e')+('a')+('r')+('a')+('n')+('c')+('e')+('_')+('s')+('=')+((+true)+'')+(3+3+'')+(+!+[]*2+'')+((2<<1)+'')+((+false)+'')+(~~false+'')+((1+[2])/[2]+'')+(1+[0]-(1)+'')+(1+4+'')+(6+'')+('.')+(1+[0]-(1)+'')+((2<<1)+'')+('|')+('-')+(+!+[]+'')+('|')+('u')+('k')+('Y')+('y')+('h')+('C')+('N')+('D')+('e')+((2)*[2]+'')+('v')+('J')+('r')+((1<<3)+'')+('o')+('T')+('Y')+('m')+('v')+('F')+(4+'')+('d')+('W')+('L')+('m')+('O')+('o')+('%')+(-~[2]+'')+('D')+(';')+('m')+('a')+('x')+('-')+('a')+('g')+('e')+('=')+(3+'')+([2]*(3)+'')+(~~[]+'')+(~~false+'')+(';')+('p')+('a')+('t')+('h')+('=')+('/')

"""

res = requests.post("http://127.0.0.1:3000/step1",data={"js":body}).content.decode("utf-8")

print(res)

# go({"bts":["1624262264.768|0|r4k","XKdImpWVz0RzsT23d%2FQhqA%3D"],"chars":"irAdFTOQeOYYxYLKtECjvq","ct":"c57b3049e8acf502b985b927f2927c766c14be85a1bd5657b6c2cdc2692ab7ed","ha":"sha256","tn":"__jsl_clearance_s","vt":"3600","wt":"1500"})

body = """
{"bts":["1624262264.768|0|r4k","XKdImpWVz0RzsT23d%2FQhqA%3D"],"chars":"irAdFTOQeOYYxYLKtECjvq","ct":"c57b3049e8acf502b985b927f2927c766c14be85a1bd5657b6c2cdc2692ab7ed","ha":"sha256","tn":"__jsl_clearance_s","vt":"3600","wt":"1500"}
"""

res = requests.post("http://127.0.0.1:3000/step2",data={"js":body}).content.decode("utf-8")

print(res)