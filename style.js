(function (blink) {
	'use strict';

	var reporterosusademoStyle = function () {
			blink.theme.styles.basic.apply(this, arguments);
		},
		page = blink.currentPage;

	reporterosusademoStyle.prototype = {
		//BK-15873 añadimos el estilo basic como parent para la herencia de los estilos del CKEditor
		parent: blink.theme.styles.basic.prototype,
		bodyClassName: 'content_type_clase_reporterosusademo',
		ckEditorStyles: {
			name: 'reporterosusademo',
			styles: [
				{ name: 'Título 01', element: 'h3', attributes: { 'class': 'bck-title bck-title-1'} },
				{ name: 'Título 02', element: 'h3', attributes: { 'class': 'bck-title bck-title-2'} },
				{ name: 'Título 03', element: 'h3', attributes: { 'class': 'bck-title bck-title-3'} },
				{ name: 'Título 04', element: 'h3', attributes: { 'class': 'bck-title bck-title-4'} },
				{ name: 'Título 05', element: 'h3', attributes: { 'class': 'bck-title bck-title-5'} },
				{ name: 'Título 06', element: 'h3', attributes: { 'class': 'bck-title bck-title-6'} },
				{ name: 'Título 07', element: 'h3', attributes: { 'class': 'bck-title bck-title-7'} },
				{ name: 'Título 08', element: 'h3', attributes: { 'class': 'bck-title bck-title-8'} },
				{ name: 'Título 09', element: 'h3', attributes: { 'class': 'bck-title bck-title-9'} },
				{ name: 'Título 10', element: 'h3', attributes: { 'class': 'bck-title bck-title-10'} },
				{ name: 'Título 11', element: 'h3', attributes: { 'class': 'bck-title bck-title-11'} },
				{ name: 'Título 12', element: 'h3', attributes: { 'class': 'bck-title bck-title-12'} },
				{ name: 'Título 13', element: 'h3', attributes: { 'class': 'bck-title bck-title-13'} },
				{ name: 'Título 14', element: 'h3', attributes: { 'class': 'bck-title bck-title-14'} },
				{ name: 'Título 15', element: 'h3', attributes: { 'class': 'bck-title bck-title-15'} },
				{ name: 'Título 16', element: 'h3', attributes: { 'class': 'bck-title bck-title-16'} },
				{ name: 'Título 17', element: 'h3', attributes: { 'class': 'bck-title bck-title-17'} },
				{ name: 'Título 18', element: 'h3', attributes: { 'class': 'bck-title bck-title-18'} },
				{ name: 'Título 19', element: 'h3', attributes: { 'class': 'bck-title bck-title-19'} },
				{ name: 'Título 20', element: 'h3', attributes: { 'class': 'bck-title bck-title-20'} },
				{ name: 'Título 21', element: 'h3', attributes: { 'class': 'bck-title bck-title-21'} },
				{ name: 'Título 22', element: 'h3', attributes: { 'class': 'bck-title bck-title-22'} },
				{ name: 'Título 23', element: 'h3', attributes: { 'class': 'bck-title bck-title-23'} },
				{ name: 'Título 24', element: 'h3', attributes: { 'class': 'bck-title bck-title-24'} },
				{ name: 'Título 25', element: 'h3', attributes: { 'class': 'bck-title bck-title-25'} },
				{ name: 'Título 26', element: 'h3', attributes: { 'class': 'bck-title bck-title-26'} },
				

				{ name: 'Énfasis 01', element: 'span', attributes: { 'class': 'bck-enfasis-1'} },
				{ name: 'Énfasis 02', element: 'span', attributes: { 'class': 'bck-enfasis-2'} },
				{ name: 'Énfasis 03', element: 'span', attributes: { 'class': 'bck-enfasis-3'} },
				{ name: 'Énfasis 04', element: 'span', attributes: { 'class': 'bck-enfasis-4'} },
				{ name: 'Énfasis 05', element: 'span', attributes: { 'class': 'bck-enfasis-5'} },
				{ name: 'Énfasis 06', element: 'span', attributes: { 'class': 'bck-enfasis-6'} },
				{ name: 'Énfasis 07', element: 'span', attributes: { 'class': 'bck-enfasis-7'} },
				{ name: 'Énfasis 08', element: 'span', attributes: { 'class': 'bck-enfasis-8'} },
				{ name: 'Énfasis 09', element: 'span', attributes: { 'class': 'bck-enfasis-9'} },
				{ name: 'Énfasis 10', element: 'span', attributes: { 'class': 'bck-enfasis-10'} },
				{ name: 'Énfasis 11', element: 'span', attributes: { 'class': 'bck-enfasis-11'} },
				{ name: 'Énfasis 12', element: 'span', attributes: { 'class': 'bck-enfasis-12'} },
				{ name: 'Énfasis 13', element: 'span', attributes: { 'class': 'bck-enfasis-13'} },
				{ name: 'Énfasis 14', element: 'span', attributes: { 'class': 'bck-enfasis-14'} },
				{ name: 'Énfasis 15', element: 'span', attributes: { 'class': 'bck-enfasis-15'} },
				{ name: 'Énfasis 16', element: 'span', attributes: { 'class': 'bck-enfasis-16'} },
				{ name: 'Énfasis 17', element: 'span', attributes: { 'class': 'bck-enfasis-17'} },
				{ name: 'Énfasis 18', element: 'span', attributes: { 'class': 'bck-enfasis-18'} },
				{ name: 'Énfasis 19', element: 'span', attributes: { 'class': 'bck-enfasis-19'} },
				{ name: 'Énfasis 20', element: 'span', attributes: { 'class': 'bck-enfasis-20'} },
				{ name: 'Énfasis 21', element: 'span', attributes: { 'class': 'bck-enfasis-21'} },
				{ name: 'Énfasis 22', element: 'span', attributes: { 'class': 'bck-enfasis-22'} },
				{ name: 'Énfasis 23', element: 'span', attributes: { 'class': 'bck-enfasis-23'} },
				{ name: 'Énfasis 24', element: 'span', attributes: { 'class': 'bck-enfasis-24'} },
				{ name: 'Énfasis 25', element: 'span', attributes: { 'class': 'bck-enfasis-25'} },
				{ name: 'Énfasis 26', element: 'span', attributes: { 'class': 'bck-enfasis-26'} },
				{ name: 'Énfasis 27', element: 'span', attributes: { 'class': 'bck-enfasis-27'} },
				{ name: 'Énfasis 28', element: 'span', attributes: { 'class': 'bck-enfasis-28'} },


				{ name: 'Lista Ordenada 01', element: 'ol', attributes: { 'class': 'bck-ol bck-ol-1' } },
				{ name: 'Lista Ordenada 02', element: 'ol', attributes: { 'class': 'bck-ol bck-ol-2' } },
				{ name: 'Lista Ordenada 03', element: 'ol', attributes: { 'class': 'bck-ol bck-ol-3' } },
				{ name: 'Lista Ordenada 04', element: 'ol', attributes: { 'class': 'bck-ol bck-ol-4' } },
				{ name: 'Lista Ordenada 05', element: 'ol', attributes: { 'class': 'bck-ol bck-ol-5' } },
				{ name: 'Lista Ordenada 06', element: 'ol', attributes: { 'class': 'bck-ol bck-ol-6' } },
				{ name: 'Lista Ordenada 07', element: 'ol', attributes: { 'class': 'bck-ol bck-ol-7' } },
				{ name: 'Lista Ordenada 08', element: 'ol', attributes: { 'class': 'bck-ol bck-ol-8' } },
				{ name: 'Lista Ordenada 09', element: 'ol', attributes: { 'class': 'bck-ol bck-ol-9' } },
				{ name: 'Lista Ordenada 10', element: 'ol', attributes: { 'class': 'bck-ol bck-ol-10' } },
				{ name: 'Lista Ordenada 11', element: 'ol', attributes: { 'class': 'bck-ol bck-ol-11' } },
				{ name: 'Lista Ordenada 12', element: 'ol', attributes: { 'class': 'bck-ol bck-ol-12' } },
				{ name: 'Lista Ordenada 13', element: 'ol', attributes: { 'class': 'bck-ol bck-ol-13' } },
				{ name: 'Lista Ordenada 14', element: 'ol', attributes: { 'class': 'bck-ol bck-ol-14' } },
				{ name: 'Lista Ordenada 15', element: 'ol', attributes: { 'class': 'bck-ol bck-ol-15' } },
				{ name: 'Lista Ordenada 16', element: 'ol', attributes: { 'class': 'bck-ol bck-ol-16' } },
				{ name: 'Lista Ordenada 17', element: 'ol', attributes: { 'class': 'bck-ol bck-ol-17' } },
				{ name: 'Lista Ordenada 18', element: 'ol', attributes: { 'class': 'bck-ol bck-ol-18' } },
				{ name: 'Lista Ordenada 19', element: 'ol', attributes: { 'class': 'bck-ol bck-ol-19' } },
				{ name: 'Lista Ordenada 20', element: 'ol', attributes: { 'class': 'bck-ol bck-ol-20' } },
				{ name: 'Lista Ordenada 21', element: 'ol', attributes: { 'class': 'bck-ol bck-ol-21' } },
				{ name: 'Lista Ordenada 22', element: 'ol', attributes: { 'class': 'bck-ol bck-ol-22' } },
				{ name: 'Lista Ordenada 23', element: 'ol', attributes: { 'class': 'bck-ol bck-ol-23' } },
				{ name: 'Lista Ordenada 24', element: 'ol', attributes: { 'class': 'bck-ol bck-ol-24' } },
				{ name: 'Lista Ordenada 25', element: 'ol', attributes: { 'class': 'bck-ol bck-ol-25' } },

				{ name: 'Lista Desordenada 01', element: 'ul', attributes: { 'class': 'bck-ul bck-ul-1' } },
				{ name: 'Lista Desordenada 02', element: 'ul', attributes: { 'class': 'bck-ul bck-ul-2' } },
				{ name: 'Lista Desordenada 03', element: 'ul', attributes: { 'class': 'bck-ul bck-ul-3' } },
				{ name: 'Lista Desordenada 04', element: 'ul', attributes: { 'class': 'bck-ul bck-ul-4' } },
				{ name: 'Lista Desordenada 05', element: 'ul', attributes: { 'class': 'bck-ul bck-ul-5' } },
				{ name: 'Lista Desordenada 06', element: 'ul', attributes: { 'class': 'bck-ul bck-ul-6' } },
				{ name: 'Lista Desordenada 07', element: 'ul', attributes: { 'class': 'bck-ul bck-ul-7' } },
				{ name: 'Lista Desordenada 08', element: 'ul', attributes: { 'class': 'bck-ul bck-ul-8' } },
				{ name: 'Lista Desordenada 09', element: 'ul', attributes: { 'class': 'bck-ul bck-ul-9' } },
				{ name: 'Lista Desordenada 10', element: 'ul', attributes: { 'class': 'bck-ul bck-ul-10' } },
				{ name: 'Lista Desordenada 11', element: 'ul', attributes: { 'class': 'bck-ul bck-ul-11' } },
				{ name: 'Lista Desordenada 12', element: 'ul', attributes: { 'class': 'bck-ul bck-ul-12' } },
				{ name: 'Lista Desordenada 13', element: 'ul', attributes: { 'class': 'bck-ul bck-ul-13' } },
				{ name: 'Lista Desordenada 14', element: 'ul', attributes: { 'class': 'bck-ul bck-ul-14' } },
				{ name: 'Lista Desordenada 15', element: 'ul', attributes: { 'class': 'bck-ul bck-ul-15' } },
				{ name: 'Lista Desordenada 16', element: 'ul', attributes: { 'class': 'bck-ul bck-ul-16' } },
				{ name: 'Lista Desordenada 17', element: 'ul', attributes: { 'class': 'bck-ul bck-ul-17' } },

				{ name: 'Caja 01', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box bck-box-1' } },
				{ name: 'Caja 02', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box bck-box-2' } },
				{ name: 'Caja 03', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box bck-box-3' } },
				{ name: 'Caja 04', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box bck-box-4' } },
				{ name: 'Caja 05', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box bck-box-5' } },
				{ name: 'Caja 06', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box bck-box-6' } },
				{ name: 'Caja 07', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box bck-box-7' } },
				{ name: 'Caja 08', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box bck-box-8' } },
				{ name: 'Caja 09', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box bck-box-9' } },
				{ name: 'Caja 10', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box bck-box-10' } },
				{ name: 'Caja 11', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box bck-box-11' } },
				{ name: 'Caja 12', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box bck-box-12' } },
				{ name: 'Caja 13', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box bck-box-13' } },
				{ name: 'Caja 14', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box bck-box-14' } },
				{ name: 'Caja 15', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box bck-box-15' } },
				{ name: 'Caja 16', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box bck-box-16' } },
				{ name: 'Caja 17', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box bck-box-17' } },
				{ name: 'Caja 18', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box bck-box-18' } },
				{ name: 'Caja 19', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box bck-box-19' } },
				{ name: 'Caja 20', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box bck-box-20' } },
				{ name: 'Caja 21', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box bck-box-21' } },
				{ name: 'Caja 22', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box bck-box-22' } },
				{ name: 'Caja 23', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box bck-box-23' } },
				{ name: 'Caja 24', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box bck-box-24' } },
				{ name: 'Caja 25', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box bck-box-25' } },
				{ name: 'Caja 26', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box bck-box-26' } },
				{ name: 'Caja 27', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box bck-box-27' } },

				{ name: 'Icono Parejas Negro', element: 'span', attributes: { 'class': 'icon icon-parejas-negro' } },
				{ name: 'Icono Parejas Blanco', element: 'span', attributes: { 'class': 'icon icon-parejas-blanco' } },
				{ name: 'Icono Grupos Negro', element: 'span', attributes: { 'class': 'icon icon-grupos-negro' } },
				{ name: 'Icono Grupos Blanco', element: 'span', attributes: { 'class': 'icon icon-grupos-blanco' } },
				{ name: 'Icono Campana Azul', element: 'span', attributes: { 'class': 'icon icon-campana-azul' } },
				{ name: 'Icono Campana Morado', element: 'span', attributes: { 'class': 'icon icon-campana-morado' } },
				{ name: 'Icono Campana Teja', element: 'span', attributes: { 'class': 'icon icon-campana-teja' } },
				{ name: 'Icono 1 estrella Amarillo', element: 'span', attributes: { 'class': 'icon icon-una-estrella' } },
				{ name: 'Icono 1 estrella Morado', element: 'span', attributes: { 'class': 'icon icon-una-estrella-morado' } },
				{ name: 'Icono 1 estrella Azul', element: 'span', attributes: { 'class': 'icon icon-una-estrella-azul' } },
				{ name: 'Icono 1 estrella Gris', element: 'span', attributes: { 'class': 'icon icon-una-estrella-gris' } },
				{ name: 'Icono 2 estrellas Amarillo', element: 'span', attributes: { 'class': 'icon icon-dos-estrellas' } },
				{ name: 'Icono 2 estrellas Morado', element: 'span', attributes: { 'class': 'icon icon-dos-estrellas-morado' } },
				{ name: 'Icono 2 estrellas Azul', element: 'span', attributes: { 'class': 'icon icon-dos-estrellas-azul' } },
				{ name: 'Icono 2 estrellas Gris', element: 'span', attributes: { 'class': 'icon icon-dos-estrellas-gris' } },
				{ name: 'Icono 3 estrellas Amarillo', element: 'span', attributes: { 'class': 'icon icon-tres-estrellas' } },
				{ name: 'Icono 3 estrellas Morado', element: 'span', attributes: { 'class': 'icon icon-tres-estrellas-morado' } },
				{ name: 'Icono 3 estrellas Azul', element: 'span', attributes: { 'class': 'icon icon-tres-estrellas-azul' } },
				{ name: 'Icono 3 estrellas Gris', element: 'span', attributes: { 'class': 'icon icon-tres-estrellas-gris' } },
				{ name: 'Icono Video', element: 'span', attributes: { 'class': 'icon icon-video' } },
				{ name: 'Icono Lupa', element: 'span', attributes: { 'class': 'icon icon-lupa' } },
				{ name: 'Icono Like', element: 'span', attributes: { 'class': 'icon icon-like' } },
				{ name: 'Icono Dislike', element: 'span', attributes: { 'class': 'icon icon-dislike' } },
				{ name: 'Icono Cabeza Engranajes', element: 'span', attributes: { 'class': 'icon icon-cabeza-engranajes' } },
				{ name: 'Icono Flecha Azul', element: 'span', attributes: { 'class': 'icon icon-flechaazul' } },
				{ name: 'Icono Rubric', element: 'span', attributes: { 'class': 'icon icon-rubric' } },
				
				{ name: 'Tabla 1', element: 'table', attributes: { 'class': 'bck-table-1' } },
				{ name: 'Tabla 2', element: 'table', attributes: { 'class': 'bck-table-2' } },
				{ name: 'Tabla 3', element: 'table', attributes: { 'class': 'bck-table-3' } },

				{ name: 'Celda 1', element: 'td', attributes: { 'class': 'bck-td-1' } },
				{ name: 'Celda 2', element: 'td', attributes: { 'class': 'bck-td-2' } },
				{ name: 'Celda 3', element: 'td', attributes: { 'class': 'bck-td-3' } },
				{ name: 'Celda 4', element: 'td', attributes: { 'class': 'bck-td-4' } },
				{ name: 'Celda 5', element: 'td', attributes: { 'class': 'bck-td-5' } },
				{ name: 'Celda 6', element: 'td', attributes: { 'class': 'bck-td-6' } },
				{ name: 'Celda 7', element: 'td', attributes: { 'class': 'bck-td-7' } },
				{ name: 'Celda 8', element: 'td', attributes: { 'class': 'bck-td-8' } },
				{ name: 'Celda 9', element: 'td', attributes: { 'class': 'bck-td-9' } },

				{ name: 'Desplegable 1', type: 'widget', widget: 'blink_dropdown', attributes: { 'class': 'bck-dropdown bck-dropdown-1' } },
				{ name: 'Desplegable 2', type: 'widget', widget: 'blink_dropdown', attributes: { 'class': 'bck-dropdown bck-dropdown-2' } },
				{ name: 'Desplegable 3', type: 'widget', widget: 'blink_dropdown', attributes: { 'class': 'bck-dropdown bck-dropdown-3' } }
			]
		},
		slidesTitle: {},
		subunits: [],
		totalSlides: 0,

		init: function (scope) {
			var that = scope || this;
			this.parent.init.call(that);
			that.addActivityTitle();
			if(window.esWeb) return;
			that.fillSlidesTitle();
			that.getActualUnitActivities();
			blink.events.on("course_loaded", function(){
				that.formatCarouselindicators();
				that.enableSliders();
			});
			that.animateNavbarOnScroll();
			that.initDropdown();
			that.addSlideNavigators();
		},
		removeFinalSlide: function () {
			if (blink.isIosApp && blink.activity.level != 6) {
				var parent = blink.theme.styles.basic.prototype;
				parent.removeFinalSlide.call(this, true);
			}
		},

		addActivityTitle: function () {
			if (!blink.courseInfo || !blink.courseInfo.unit) return;
			$('.libro-left').find('.title').html(function () {
				return blink.courseInfo.unit + ' > ' + $(this).html();
			})
		},

		fillSlidesTitle: function () {
			var self = this.slidesTitle;
			for (var index = 0; index < window.secuencia.length; index++) {
				var slide = window['t'+index+'_slide'];
				var slideTitle = slide.title;
				slideTitle = slideTitle.replace(/<span class="index">\s*([\d]+)\s*<\/span>/i, '$1. ');
				slideTitle = slideTitle.replace(/\s+/, ' ');
				slideTitle = stripHTML(slideTitle);

				self['t'+index+'_slide'] = slideTitle;
			}
		},

		/**
		 * @summary Gets the activity type subunits of the actual unit.
		 * @return {Object} Object of the actual unit filtering the not activity type subunits
		 */
		getActualUnitActivities: function () {
			var curso = blink.getCourse(idcurso),
				that = this,
				units,
				unitSubunits,
				actualActivity,
				tmpActualActivity = '',
				tmpActivity = '',
				nextActivity = '',
				previousActivity = '',
				unitActivities = [];

			curso.done(function () {
				units = curso.responseJSON.units;

				$.each(units, function () {
					if (this.id && this.id == blink.courseInfo.IDUnit) {
						unitSubunits = this.subunits.concat(this.resources);
					}

					$.each(this.subunits, function () {
						if(nextActivity === '' && tmpActualActivity !== '' && this.level != 6) {
							nextActivity = this;
						}
						if (idclase == this.id) {
							tmpActualActivity = this.title;
							if(tmpActivity && tmpActivity.level != 6) {
								previousActivity = tmpActivity;
							}
						}
						tmpActivity = this;
					});
				});

				actualActivity = _.find(unitSubunits, function(subunit) {
					return subunit.id == idclase;
				});

				if (typeof actualActivity !== "undefined" && actualActivity.level == '6') {
					unitActivities.push(actualActivity);
				} else {
					unitActivities = _.filter(unitSubunits, function(subunit) {
						return subunit.type == 'actividad' && subunit.level !== '6';
					});
				}

				that.subunits = unitActivities;

				if(nextActivity !== '' || previousActivity !== '') {
					that.createListenerForSwipeBetweenActivities(nextActivity, previousActivity);
				}
			}).done(function(){
				blink.events.trigger('course_loaded');
			});
		},

		createListenerForSwipeBetweenActivities: function(nextActivity, previousActivity) {
			var that = this;

			if(nextActivity !== '' && typeof nextActivity.url !== 'undefined') {
				document.addEventListener('swipe:last:nextActivity', function(e) {
					redireccionar(nextActivity.url);
				}, false);
			}

			if(previousActivity !== '' && typeof previousActivity.url !== 'undefined') {
				document.addEventListener('swipe:first:previousActivity', function(e) {
					redireccionar(previousActivity.url);
				}, false);
			}
		},

		/**
		 * @summary Getting active slide position in relation with the total of the
		 *          unit slides.
		 * @param {Array} $subunits Array of activity type objects
		 * @return {int} Slide position
		 */
		getActualSlideNumber: function (subunits) {
			var actualSlideIndex = $('.swipeview-active').attr('data-page-index'),
				actualSlide = 1;

			for (var i in subunits) {
				if (subunits[i].id && parseInt(subunits[i].id) != idclase) {
					actualSlide += parseInt(subunits[i].pags);
				} else {
					actualSlide += parseInt(actualSlideIndex);
					break;
				}
			}

			return actualSlide;
		},

		formatCarouselindicators: function (scope, classNavbar) {
			var that = scope || this,
				navbar = ((typeof classNavbar !== "undefined" && classNavbar)?classNavbar:'reporterosusademo-navbar'),
				$navbarBottom = $('.navbar-bottom'),
				firstSlide = eval('t0_slide');
			if(blink.courseInfo && blink.courseInfo.courseDateCreated) var courseYearCreated = new Date(blink.courseInfo.courseDateCreated).getFullYear();
			var yearCopy = courseYearCreated !== undefined ? courseYearCreated : 2016;
			$navbarBottom
				.attr('class', navbar)
				.wrapInner('<div class="navbar-content"></div>')
				.find('ol')
					.before('<span class="copyright">&copy;' +  yearCopy + '</span>')
					.wrap('<div id="top-navigator"/>')
					.remove()
					.end();

			$('#volverAlIndice').click(function() {
				return showCursoCommit();
			});

			var subunits = that.subunits,
				totalSlides = 0,
				subunit_index,
				subunit_pags;

			// Different behaviour depending on whether the slides are accessed from
			// a book or from a homework link or similar
			if (subunits.length !== 0) {
				for (var i in subunits) {
					if (subunits[i].pags) {
						var subunitSlides = parseInt(subunits[i].pags);
						totalSlides += subunitSlides;
					}
					if (subunits[i].id && subunits[i].id == idclase) {
						subunit_index = i;
						subunit_pags = parseInt(subunits[i].pags);
					}
				}

				that.totalSlides = totalSlides;

				$('#top-navigator').append('<span class="left slider-navigator">' +
						'<span class="fa fa-chevron-left"></span>' +
					'</span>' +
					'<span class="slide-counter" data-subunit-index="' + subunit_index +
						'" data-subunit-pags="' + subunit_pags + '">' +
						that.getActualSlideNumber(subunits) + ' / ' + totalSlides +
					'</span>' +
					'<span class="right slider-navigator">' +
						'<span class="fa fa-chevron-right"></span>' +
					'</span>');

				blink.events.on('section:shown', function() {
					$('.slide-counter').html(that.getActualSlideNumber(subunits) +
						' / ' + totalSlides);
				});
			} else {
				$('#top-navigator').append('<span class="left slider-navigator">' +
						'<span class="fa fa-chevron-left"></span>' +
					'</span>' +
					'<span class="slide-counter">' + (window.activeSlide + 1) +
						' / ' + window.secuencia.length +
					'</span>' +
					'<span class="right slider-navigator">' +
						'<span class="fa fa-chevron-right"></span>' +
					'</span>');

				blink.events.on('section:shown', function() {
					$('.slide-counter').html((window.activeSlide + 1) +
						' / ' + window.secuencia.length);
					$('.bck-dropdown-2').hideBlink();
				});
			}

			blink.events.on('section:shown', function() {
				var sectionTitle = eval('t' + blink.activity.getFirstSlideIndex(window.activeSlide) +
					'_slide').title;
				$navbarBottom.find('.sectionTitle').text(sectionTitle);
			});

			if (firstSlide.seccion) {
				$navbarBottom.addClass('first-is-section');
			}

			blink.events.trigger(true, 'style:endFormatCarousel');
		},

		addSlideNavigators: function () {
			var that = this;

			blink.events.on("course_loaded", function(){
				var that = blink.activity.currentStyle,
					subunit_index = parseInt($('.slide-counter').attr('data-subunit-index')),
					level_six = that.subunits.length == 1 && that.subunits[0].level == 6;

				$('.slider-control').off('click');
				// Navigation change depending on whether the slides are accessed from
				// a book or from a homework link or similar
				if (that.subunits.length !== 0 && !level_six) {
					// Slider controls must allow navigation among all the activity subunits
					// in the current unit.
					var idgrupo = window.idgrupo,
						idalumno = window.idalumno,
						slideNavParams = '';

					if (idgrupo) slideNavParams += '&idgrupo=' + idgrupo;
					if (idalumno) slideNavParams += '&idalumno=' + idalumno;

					$('.left.slider-control, .left.slider-navigator').click(function () {

						if (!$(this).hasClass('disabled')) {
							if(activeSlide == 0) {
								// BK-19843 audio stop when slider changes.
								if (blink.isApp) {
									blink.rest.closeAudio();
								}
								redireccionar('/coursePlayer/clases2.php?editar=0&idcurso=' +
									idcurso + '&idclase=' + that.subunits[subunit_index - 1].id + '&modo='+ modoVisualizacion + '&numSec=' +
									that.subunits[subunit_index - 1].numSlides + slideNavParams, false, undefined);
							} else {
								blink.activity.showPrevSection();
							}
						}
					});

					$('.right.slider-control, .right.slider-navigator').click(function () {
						if (!$(this).hasClass('disabled')) {
							if(activeSlide == parseInt(that.subunits[subunit_index].pags) - 1) {
								// BK-19843 audio stop when slider changes.
								if (blink.isApp) {
									blink.rest.closeAudio();
								}
								redireccionar('/coursePlayer/clases2.php?editar=0&idcurso=' +
									idcurso + '&idclase=' + that.subunits[subunit_index + 1].id + '&modo='+ modoVisualizacion +
									((typeof window.esPopup !== "undefined" && window.esPopup)?"&popup=1":"")  + slideNavParams,
									false, undefined);
							} else {
								blink.activity.showNextSection();
							}
						}
					});

					document.addEventListener('swipe:first:previousActivity', function(e) {
						blink.activity.previousSlide(that.subunits, subunit_index);
					}, false);
					document.addEventListener('swipe:last:nextActivity', function(e) {
						blink.activity.nextSlide(that.subunits, subunit_index);
					}, false);
				} else {
					$('.left.slider-control, .left.slider-navigator').click(function () {
						blink.activity.showPrevSection();
					});
					$('.right.slider-control, .right.slider-navigator').click(function () {
						blink.activity.showNextSection();
					});
				}

				$(document).ready(function() {
					blink.events.on('showSlide:after', function() {
						that.enableSliders();
					});
				});
			});
		},
			/**
			 * @summary Enables all slider controls and disables when appropiate
			 */
			enableSliders: function () {
					// Removes disabled class to all navigation buttons and applies
				// just if its first or last slide of all activities
				$('.slider-control, .slider-navigator').removeClass('disabled');
				var that = blink.activity.currentStyle,
					subunit_index = parseInt($('.slide-counter').attr('data-subunit-index')),
					level_six = this.subunits.length == 1 && this.subunits[0].level == 6;
				// Navigation change depending on whether the slides are accessed from
				// a book or from a homework link or similar
				if (this.subunits.length !== 0 && modoVisualizacionLabel != "standalone") {
						if (this.getActualSlideNumber(this.subunits) == 1) {
							$('.slider-control.left, .slider-navigator.left').addClass('disabled');
				}
					if (this.getActualSlideNumber(this.subunits) == this.totalSlides && !level_six) {
							$('.slider-control.right, .slider-navigator.right').addClass('disabled');
				}
			} else {
						if (window.activeSlide == 0) {
							$('.slider-control.left, .slider-navigator.left').addClass('disabled');
				}
					if(window.activeSlide == parseInt(that.subunits[subunit_index].pags) - 1 && !level_six){
							$('.slider-control.right, .slider-navigator.right').addClass('disabled');
				}
			}
		},
		//BK-15873 Quitamos la funcion getEditorStyles para que herede de parent

		showBookIndexInClass: function () {
			return modoVisualizacionLabel != "standalone";

		},

		animateNavbarOnScroll: function (scope, classNavbar) {
			var that = scope || this,
				navbar = ((typeof classNavbar !== "undefined" && classNavbar)?classNavbar:'reporterosusademo-navbar');
			if (!blink.isApp) return;
			var $navbar = $('.'+navbar);
			var lastScrollTop = 0;
			$('.js-slider-item').scroll(function () {
				var scrollTop = $(this).scrollTop();
				(scrollTop > lastScrollTop && scrollTop) ? $navbar.addClass('ocultar') : $navbar.removeClass('ocultar');
				lastScrollTop = scrollTop;
			});
		},

		initDropdown : function () {
			$(".bck-dropdown-button")
				.find('.fa').text('').end() //Eliminar el &nbsp;
				.toggle(
					function(){
						$(this).parent('.bck-dropdown')
							.addClass('open')
							.find('.fa').removeClass('fa-chevron-down').addClass('fa-chevron-up').end()
							.find(".bck-dropdown-content").slideDown(300, function() {
								if($(this).parent('.bck-dropdown').hasClass('activities-dropdown')
									&& blink.activity.currentStyle.getActivePane()) {
									var actividad = $('.tab-pane.active').attr('id');
									var index = actividad.split('-').pop();
									var slide = window['t' + index + '_slide'];
									slide.onAfterShowSlide();
								}
							});

					},
					function(){
						$(this).parent('.bck-dropdown')
							.removeClass('open')
							.find('.fa').removeClass('fa-chevron-up').addClass('fa-chevron-down').end()
							.find(".bck-dropdown-content").slideUp(300);
					}
				);
		},

		// Busca la id de la última slide de un dropdown con la que se ha interactuado y
		// guarda en el suspend data.
		// @param {string} activePane 	Id del panel en el que se encuentra la slide
		setActivePane : function (activePane) {
			if (!!activePane && !!scormAPI) {
				var slideId = $(activePane).find('.class_slide').attr('data-id'),
					parentSlide = window['t' + window.activeSlide + '_slide'];
				parentSlide.sublocation = slideId;
			}
		},

		// Mira a ver si se ha guardado alguna slide del dropdown en el suspend data y,
		// en caso de ser así, la pone como activa.
		getActivePane : function () {
			var currentSlide = window['t' + window.activeSlide + '_slide'];
			if (currentSlide.sublocation) {
				var activePane = $('.class_slide[data-id="' + currentSlide.sublocation + '"]')
								.closest('.tab-pane'),
					activeDropdown = $(activePane).closest('.bck-dropdown');
				$(activeDropdown)
					.find('a[href="#' + $(activePane).attr('id') + '"]')
					.first()
					.tab('show');
				return true;
			} else {
				return true;
			}
		},

		/**
		 * Devuelve el offsetTop del elemento que agrupa a las transparencia concatenada
		 *
		 * @param {object} myElement Div de la transparencia para buscar su contenedor
		 * @returns {Boolean}
		 */
		calculateTopOffsetSlide: function(myElement){
		    if(typeof myElement === "object"){
			    var dropdown = $(myElement).parents('.bck-dropdown');
			    if(dropdown.length>0 && typeof dropdown.offset === "function"){
				    dropdown.find('.bck-dropdown-button').click();
				    return dropdown.offset().top;
			    }
		    }
		    return false;
 		}
	};

	reporterosusademoStyle.prototype = _.extend({}, new blink.theme.styles.basic(), reporterosusademoStyle.prototype);

	blink.theme.styles['reporterosusademo'] = reporterosusademoStyle;

})( blink );

$(document).ready(function() {

	if (!$('body').hasClass('edit')) {
		$(document).on('click', '.nav-tabs a', function() {
			var actividad = $(this).attr('href');
			var index = actividad.split('-').pop();
			var slide = window['t' + index + '_slide'];
			slide && slide.onAfterShowSlide();
		});
	}

	$(document).on('click', '.bck-dropdown .class_slide, .nav-tabs a', function(e){
		var activePane;
		if (!!$(e.target).closest('.nav-tabs').length) {
			activePane = $(e.target).attr('href');
		} else {
			activePane = '#' + $(e.target).closest('.tab-pane').attr('id');
		}
		blink.activity.currentStyle.setActivePane && blink.activity.currentStyle.setActivePane(activePane);
	});

});
