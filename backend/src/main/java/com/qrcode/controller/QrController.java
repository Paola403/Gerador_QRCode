package com.qrcode.controller;

import com.qrcode.service.QrService;

import org.springframework.web.bind.annotation.*;

/*
@RestController indica que essa classe
é responsável por criar endpoints da API
*/

@RestController

// URL base
@RequestMapping("/qrcode")

// permite conexão com frontend
@CrossOrigin
public class QrController {

    private final QrService qrService;

    // Injeção de dependência
    public QrController(QrService qrService) {
        this.qrService = qrService;
    }

    /*
    Endpoint GET

    Exemplo de uso:
    http://localhost:8080/qrcode?numero=5511999999999&mensagem=ola
    */

    @GetMapping
    public String gerarQRCode(
            @RequestParam String numero,
            @RequestParam String mensagem
    ) {

        return qrService.gerarLink(numero, mensagem);
    }

}