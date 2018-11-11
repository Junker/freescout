
function savedRepliesInit()
{
	$(document).ready(function() {

		summernoteInit('.saved-reply-body');

	    // Delete saved reply
	    $(".button-delete-saved-reply").click(function(e) {
	    	var button = $(this);
	    	var reply_id = button.data('id');
	    	confirm_html = jQuery("#delete_saved_reply_modal").html();

			showModalDialog(confirm_html, {
				on_show: function(modal) {
					modal.children().find('.delete-saved-reply-ok:first').click(function(e) {
						modal.modal('hide');
						$.redirect(laroute.route('savedreplies.delete'), {id: reply_id, '_token': getCsrfToken()}, 'POST'); 
						e.preventDefault();
					});
				}
			});
		});
	});
}