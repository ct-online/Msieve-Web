mergeInto(LibraryManager.library, {
	publishState: function (num_relations, full_relations, combined_relations, partial_relations, max_relations) {
		Module.publishState(num_relations, full_relations, combined_relations, partial_relations, max_relations);
	},
	publishFactor: function (factor_type, factor_number) {
		Module.publishFactor(factor_type, UTF8ToString(factor_number));
	},
	publishInputNumber: function (input_number) {
		Module.publishInputNumber(UTF8ToString(input_number));
	}
});
