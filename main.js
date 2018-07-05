define([], function () {
	function ping() {
		return 'pong';
	}
	return {
		ping: ping
	};
});