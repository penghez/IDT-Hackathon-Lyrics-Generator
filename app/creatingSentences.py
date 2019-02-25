import requests
import json
import random
import re
from bs4 import BeautifulSoup
from textblob import TextBlob


headers = {
    "X-Mashape-Key":  # API KEY,
    "Accept": "application/json"
}
url = 'https://wordsapiv1.p.mashape.com/words/'


def target_word_to_sentence(keyword):
    req = requests.get(url + keyword, headers=headers)
    sentences = []

    try:
        req = req.json()['results']

        for r in req:
            try:
                sentences.extend(r['examples'])
            except:
                pass
        random.shuffle(sentences)
    except:
        pass

    return sentences


def find_rhymes(keyword):
    req = requests.get(url + keyword + '/rhymes', headers=headers)

    req = req.json()['rhymes']['all']
    req = list(filter(lambda x: ' ' not in x, req))
    random.shuffle(req)
    print(req)
    if len(req) >= 8:
        return req[:8]
    else:
        return req


def get_sentence_from_zone(keyword):
    session = requests.session()
    res = session.get("http://www.rhymezone.com/r/rhyme.cgi?Word=" +
                      keyword + "&org1=syl&org2=l&org3=y&typeofrhyme=exa")
    soup = BeautifulSoup(res.text, 'lxml')

    try:
        snippets = soup.find_all('script')[7].text.split('\n')[
            1].split("=", 1)[-1].strip()
        snippets_json = json.loads(snippets)
    except:
        return []

    sentences = []
    for sj in snippets_json:
        str_sen = sj['snippet'].replace('<b>', '').replace(
            '</b>', '').split('<br>')[0].strip()
        sentences.append(str_sen + ' ' + analyze_emotion(str_sen))

    random.shuffle(sentences)
    if len(sentences) >= 8:
        return sentences[:8]
    else:
        return sentences


def analyze_emotion(sentence):
    emotions = ['Miserable', 'Angry', 'Sad', 'InLove', 'Excited', 'Happy']
    blob = TextBlob(sentence)
    degree = (1 + blob.sentiment.polarity) * 5 / 2
    return emotions[int(degree)]
