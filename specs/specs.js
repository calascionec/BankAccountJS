describe('Account', function() {
	it("creates a new account with the given specs", function() {
		var testAccount = new Account("Bob", "Smith", 500);

		expect(testAccount.firstName).to.equal("Bob");
		expect(testAccount.lastName).to.equal("Smith");
		expect(testAccount.balance).to.equal(500);
	})

	it("adds the fullName method to all Accounts", function() {
		var testAccount = new Account("Bob","Smith", 500);
		expect(testAccount.fullName()).to.equal("Bob Smith");
	})

	it("test the updateBalance method for specific Account instance", function() {
		var testAccount = new Account("Bob","Smith", 100);
		testAccount.updateBalance(1900,0);
	})


})






// describe('Contact', function() {
//
// 	it("creates a new contact with the given specs", function() {
// 		var testContact = new Contact("John","Smith");
//
// 		expect(testContact.firstName).to.equal("John");
// 		expect(testContact.lastName).to.equal("Smith");
// 		expect(testContact.addresses).to.eql([]);
// 	});
//
// 	it("adds the fullName method to all contacts", function() {
// 		var testContact = new Contact("Sherlock", "Holmes");
//
// 		expect(testContact.fullName()).to.equal("Sherlock Holmes");
// 	});
//
//
//
// });


// describe("Address", function() {
// 	it("creates a new address with the given specifications", function() {
// 		var testAddress = new Address("123 Main St", "Test City", "Test State", "Home");
//
// 		expect(testAddress.street).to.equal("123 Main St");
// 		expect(testAddress.city).to.equal("Test City");
// 		expect(testAddress.state).to.equal("Test State");
// 		expect(testAddress.kind).to.equal("Home");
// 	})
//
// 	it("add the fullAddress metho to all addresses", function() {
// 		var testAddress = new Address("123 Main St", "Test City", "Test State");
//
// 		expect(testAddress.fullAddress()).to.equal("123 Main St, Test City, Test State");
// 	})
//
//
//
//
// })
