const PaymentWsdl = `<definitions name = "TransacionService"
targetNamespace = "http://www.examples.com/wsdl/UserService.wsdl"
xmlns = "http://schemas.xmlsoap.org/wsdl/"
xmlns:soap = "http://schemas.xmlsoap.org/wsdl/soap/"
xmlns:tns = "http://www.examples.com/wsdl/UserService.wsdl"
xmlns:xsd = "http://www.w3.org/2001/XMLSchema">
<message name = "MakePaymentRequest">
   <part name = "document" type = "xsd:string"/>
   <part name = "amount" type = "xsd:number"/>
</message>
 
<message name = "MakePaymentResponse">
   <part name = "session_id" type = "xsd:string"/>
</message>
<message name = "AuthPaymentRequest">
   <part name = "document" type = "xsd:string"/>
   <part name = "token" type = "xsd:string"/>
</message>
 
<message name = "AuthPaymentResponse">
   <part name = "message" type = "xsd:string"/>
</message>
<portType name = "Transaction_PortType">
   <operation name = "makePayment">
      <input message = "tns:MakePaymentRequest"/>
      <output message = "tns:MakePaymentResponse"/>
   </operation>
   <operation name = "authPayment">
      <input message = "tns:AuthPaymentRequest"/>
      <output message = "tns:AuthPaymentResponse"/>
   </operation>
</portType>
<binding name = "Transaction_Binding" type = "tns:Transaction_PortType">
   <soap:binding style = "rpc"
      transport = "http://schemas.xmlsoap.org/soap/http"/>
   <operation name = "makePayment">
      <soap:operation soapAction = "makePayment"/>
      <input>
         <soap:body
            encodingStyle = "http://schemas.xmlsoap.org/soap/encoding/"
            namespace = "urn:examples:transactionservice"
            use = "encoded"/>
      </input>
     
      <output>
         <soap:body
            encodingStyle = "http://schemas.xmlsoap.org/soap/encoding/"
            namespace = "urn:examples:transactionservice"
            use = "encoded"/>
      </output>
   </operation>
   <operation name = "authPayment">
      <soap:operation soapAction = "authPayment"/>
      <input>
         <soap:body
            encodingStyle = "http://schemas.xmlsoap.org/soap/encoding/"
            namespace = "urn:examples:transactionservice"
            use = "encoded"/>
      </input>
     
      <output>
         <soap:body
            encodingStyle = "http://schemas.xmlsoap.org/soap/encoding/"
            namespace = "urn:examples:transactionservice"
            use = "encoded"/>
      </output>
   </operation>
</binding>
<service name = "paymentController">
   <documentation>WSDL File for UserService</documentation>
   <port binding = "tns:Transaction_Binding" name = "paymentFunctions">
      <soap:address
         location = "http://www.examples.com/TransactionService/" />
   </port>
</service>
</definitions>`;

module.exports={
    PaymentWsdl
}