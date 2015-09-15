$(document).ready(function(){
    var database = [];

    $("form#new-account").submit(function(event){
        // debugger;

        event.preventDefault();
        var inputtedFirstName = $("input#new-first-name").val();
        var inputtedLastName = $("input#new-last-name").val();
        var inputtedBalance = parseInt($("input#new-balance").val());

        var newAccount = new Account(inputtedFirstName, inputtedLastName, inputtedBalance);
        // console.log(newAccount);
        database.push(newAccount);
        console.log(database[0]);
        $("ul#accounts").append("<li><span class='account'>" + newAccount.fullName() + "</span></li>");

        $(".account").last().click(function(){
            $("h1.account-name").text(newAccount.fullName());
            $("#balance").text(newAccount.balance);

            var index = database.indexOf(newAccount);
            $("label#deposit-index").attr("value", index);
            // $("input#new-withdrawl").attr("value", index);
        });
        resetFields();
    });

    $("form#change-balance").submit(function(event){
        event.preventDefault();
        var deposit = parseInt($("#new-deposit").val());
        var withdrawl = parseInt($("#new-withdrawl").val());
        var index = parseInt($("label#deposit-index").attr("value"));


        database[index].updateBalance(deposit, withdrawl);
        //console.log(database[index]);
        $("#balance").text(database[index].balance);
        resetFields();
    });

});



function Account(firstName, lastName, balance){
    this.firstName = firstName;
    this.lastName = lastName;
    this.balance = balance;
}

Account.prototype.fullName = function() {
    return this.firstName + " " + this.lastName;
}

Account.prototype.updateBalance = function(deposit, withdrawl) {
    this.balance = this.balance + deposit;
    this.balance = this.balance - withdrawl;
}

function resetFields() {
    $("input#new-first-name").val("");
    $("input#new-last-name").val("");
    $("input#new-balance").val("");
    $("input#new-deposit").val(0);
    $("input#new-withdrawl").val(0);
}
