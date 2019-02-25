from app import app
from flask import Flask, render_template, request, flash, url_for, redirect, jsonify, make_response
from .creatingSentences import *
import random

@app.route('/')
def index():
    return jsonify({
        "msg": "Test"
    })

@app.route('/genbasic', methods=['POST'])
def genbasic():
    if request.method == 'POST' and 'word' in request.values:
        keyword = request.values['word']
        sentences = target_word_to_sentence(keyword)
        random.shuffle(sentences)
        if len(sentences) >= 4:
            sentences = sentences[:4]
        return jsonify({
            'choices': sentences
        })
    return jsonify({
        'msg': 'wrong'
    })

@app.route('/rhymify', methods=['POST'])
def rhymify():
    if request.method == 'POST' and 'word' in request.values:
        keyword = request.values['word']
        rhymes = find_rhymes(keyword)
        sentences = []
        for r in rhymes:
            sentences.extend(get_sentence_from_zone(r))
        if len(sentences) >= 4:
            sentences = sentences[:4]
        return jsonify({
            'choices': sentences
        })
    return jsonify({
        'msg': 'wrong'
    })