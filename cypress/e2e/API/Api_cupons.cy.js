describe('empty spec', () => {
    it('Listar todos os cupons cadastrados', ()=>{
        cy.request({
            method: 'GET',
            url: 'http://lojaebac.ebaconline.art.br/wp-json/wc/v3/coupons?context=view',

             headers: {
               authorization: 'Basic YWRtaW5fZWJhYzpAYWRtaW4hJmJAYyEyMDIy',
            }

        }).then((response) => {
            expect(response.status).to.equal(200)
            expect(response.body).to.have.property('cupons')
            expect(response.duration).to.be.lessThan(40)
        })
    });


    it('Listar cupom por id', ()=>{
        cy.request({
            method: 'GET',
            url: 'http://lojaebac.ebaconline.art.br/wp-json/wc/v3/coupons?context=view',

             headers: {
               authorization: 'Basic YWRtaW5fZWJhYzpAYWRtaW4hJmJAYyEyMDIy',
            }

        }).then((response) => {
            expect(response.Description.Id).to.equal(8209)
            expect(response.status).to.equal(200)

        })
    });

    it('Cadastrar Cupom', () => {
        let valor = `Cupons de descontos  ${Math.floor(Math.random() * 150)}`
        cy.request({
            method: 'POST',
            url: 'http://lojaebac.ebaconline.art.br/rest-api/docs/#/coupons/post_wc_v3_coupons',
            body: {
                "code": "cupom",
                "amount": valor,
                "discount_type": "fixed_product",
                "description": "Cupom de desconto de teste"
            },

            headers: { authorization: token }
        }).then((response) => {
            expect(response.status).to.equal(201)

        })
    });

    it('Cadastrar Cupom já cadastrado', () => {
        cy.cadastrarCupom(token, 'cupom', 100, "fixed_product", "Cupom de desconto de teste")
    
            .then((response) => {
                expect(response.status).to.equal(400)
                expect(response.body.message).to.equal('O código de cupom já existe')
            })
    
    });
  })




