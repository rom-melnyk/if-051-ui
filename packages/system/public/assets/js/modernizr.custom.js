var menuLeft = document.getElementById( 'cbp-spmenu-s1' ),
				showLeft = document.getElementById( 'showSidebar' ),
				sidebarClose = document.getElementById('sidebarClose'),
				body = document.body;

			showLeft.onclick = function() {
				classie.toggle( this, 'active' );
				classie.toggle( menuLeft, 'cbp-spmenu-open' );
			//	disableOther( 'showLeft' );
				
			};

			function disableOther( button ) {
				if( button !== 'showLeft' ) {
					classie.toggle( showLeft, 'disabled' );
				}
				if( button !== 'sliderClose' ) {
					classie.toggle( sidebarClose, 'disabled' );
				}
			}