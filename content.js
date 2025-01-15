function hideBalance() {
	const balanceElement = document.querySelector(".user-balance");
	if (balanceElement) {
		balanceElement.style.display = "none";
	}
}

// Run when page loads
hideBalance();

// Create observer to handle dynamic content loading
const observer = new MutationObserver(() => {
	hideBalance();
});

// Start observing the document with the configured parameters
observer.observe(document.body, {
	childList: true,
	subtree: true,
});
