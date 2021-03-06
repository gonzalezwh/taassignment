
(function(){

	// Script for the filter bar
    'use strict';
	var $ = jQuery;
	$.fn.extend({
		filterTable: function(){
			return this.each(function(){
				$(this).on('keyup', function(e){
					$('.filterTable_no_results').remove();
					var $this = $(this), search = $this.val().toLowerCase(), target = $this.attr('data-filters'), $target = $(target), $rows = $target.find('tbody tr ');
					if(search == '') {
						$rows.show();
					} else {
						$rows.each(function(){
							var $this = $(this);
							if ($this.text().toLowerCase().indexOf(search) === -1)
								if ($this.attr('id') != 'search_box')
									$this.hide()
							else
								$this.show();
						})
						if($target.find('tbody tr:visible').size() === 1) {
							var col_count = $target.find('tr').first().find('th').size();
							var no_results = $('<tr class="filterTable_no_results"><td colspan="'+col_count+'">No results found</td></tr>')
							$target.find('tbody').append(no_results);
						}
					}
				});
			});
		}
	});
	$('[data-action="filter"]').filterTable();


})(jQuery);

$(function(){
    // attach table filter plugin to inputs
	$('[data-action="filter"]').filterTable();
	
	$('.container').on('click', '.panel-heading span.filter', function(e){
		var $this = $(this), 
				$panel = $this.parents('.panel');
		
		$panel.find('.panel-body').slideToggle();
		if($this.css('display') != 'none') {
			$panel.find('.panel-body input').focus();
		}
	});
	$('[data-toggle="tooltip"]').tooltip();
})

$(document).ready(function() {
	$('.filterable .add_user').click(function() {
		var $panel = $(this).parents('.filterable'),
			$add_user_form = $panel.find('#add_user_form');

		if ($add_user_form.css('display') == 'none') {
			$add_user_form.css('display','block')
			$add_user_form.first().focus();
		} else {
			$add_user_form.val('').css('display', 'none');
		}
	})
})