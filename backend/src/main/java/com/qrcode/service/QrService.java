package com.qrcode.service;

import java.net.URLEncoder;
import java.nio.charset.StandardCharsets;

import org.springframework.stereotype.Service;

/*
@Service indica que essa classe contém
regras de negócio da aplicação.
*/

@Service
public class QrService {

    public String gerarLink(String numero, String mensagem) {

        // encodeURIComponent equivalente do Java
        // serve para transformar espaços em %20
        String mensagemCodificada = URLEncoder.encode(mensagem, StandardCharsets.UTF_8)
        .replace("+", "%20");

        // Monta o link oficial do WhatsApp
        String link = "https://wa.me/" + numero + "?text=" + mensagemCodificada;

        return link;
    }

}